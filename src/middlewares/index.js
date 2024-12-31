const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const { responseHandler } = require('express-intercept');
// File Upload
const multer = require('multer');
const path = require('path');

const redisClient = require('../redis');
const UserModel = require('../models/user');
const { roles } = require('../models/permission');

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  const extract = token.split(' ')[1];
  const decoded = jwt.verify(extract, process.env.JWT_SECRET);
  const user = await UserModel.findById(decoded.id);
  req.user = user;
  next();
});

const verifyRefresh = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  const extract = token.split(' ')[1];
  const decoded = jwt.verify(extract, process.env.JWT_REFRESH_SECRET);
  const user = await UserModel.findById(decoded.id);
  // console.log(user)
  req.user = { ...user._doc, extract };
  // console.log(req.user)
  next();
});

function logger(req, res, next) {
  // console.log(req)
  console.log('Incoming request', req.rawHeaders[3]);
  // Example, request from unauthorized user
  // return res.status(404).send("Forbidden")
  next();
}

function authroize(req, res, next) {
  return res.status(404).json({
    msg: 'Not Found',
  });
}

function handleError(error, req, res, next) {
  // console.log("Hello")
  // console.log(error.message)
  return res.status(500).json(error.message);
}

function checkId(req, res, next) {
  const {id} = req.params;
  const course = courses.find((item) => item.id == id);
  if (!course) {
    return res.status(404).json({
      error: 'Resource Not Found',
    });
  }
  next();
}

function handleValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

const cacheInterceptor = (ttl) =>
  responseHandler()
    .for((req) => req.method == 'GET')
    .if((res) => {
      const codes = [200, 201, 202, 203, 204];
      return codes.includes(res.statusCode);
    })
    .getString(async (body, req, res) => {
      const { originalUrl } = res.req;
      redisClient.set(originalUrl, body, {
        EX: ttl,
      });
    });

const invalidateInterceptor = responseHandler()
  .for((req) => {
    const methods = ['POST', 'PUT', 'PATCH', 'DELETE'];
    return methods.includes(req.method);
  })
  .if((res) => {
    const codes = [200, 201, 202, 203, 204];
    return codes.includes(res.statusCode);
  })
  .getString(async (body, req, res) => {
    const { baseUrl } = req;
    console.log(baseUrl);
    const keys = await redisClient.keys(`${baseUrl}*`);
    // console.log(keys)
    for (let i = 0; i < keys.length; i++) {
      redisClient.del(keys[i]);
    }
  });

const cacheMiddleware = asyncHandler(async (req, res, next) => {
  const { originalUrl } = req;
  if (req.method == 'GET') {
    const data = await redisClient.get(originalUrl);
    if (data !== null) {
      return res.json(JSON.parse(data));
    }
  }
  next();
});

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, './../../uploads')); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// File filter to ensure only certain file types are uploaded (optional)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Only images are allowed!'), false); // Reject file
  }
};

// Single file upload middleware
const singleUpload = multer({ storage, fileFilter }).single('file');

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } 
    cb(new Error('Error: Images Only!'), false);
  
}

const checkRole = (action, role) => {
  console.log(roles[role].permissions);
  return roles[role].permissions.includes(action);
};

const permission = (action) =>
  asyncHandler((req, res, next) => {
    const {user} = req;
    if (!checkRole(action, user.permission)) {
      user.permission = 'GUEST';
      return res.json({ msg: 'Unauthorized' });
    }
    
    next();
  });

module.exports = {
  handleError,
  logger,
  verifyJWT,
  verifyRefresh,
  handleValidation,
  cacheInterceptor,
  cacheMiddleware,
  invalidateInterceptor,
  singleUpload,
  permission,
};