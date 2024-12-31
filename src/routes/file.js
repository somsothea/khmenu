const express = require('express');
const {
  handleUpload,
  getFile,
  getAllFiles,
  deleteFile,
} = require('../controller/file');
const { singleUpload } = require('../middlewares');

const fileRouter = express.Router();

fileRouter.post('/upload-single', singleUpload, handleUpload);
fileRouter.get('/:id', getFile);
fileRouter.delete('/:id', deleteFile);
fileRouter.get('/', getAllFiles);

module.exports = fileRouter;