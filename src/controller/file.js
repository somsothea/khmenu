const asyncHandler = require('express-async-handler');
const path = require('path');
const fs = require('fs');
const FileModel = require('../models/file');

const getAllFiles = asyncHandler(async (req, res) => {
  const files = await FileModel.find();
  return res.json(files);
});

const handleUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    // Save file metadata to database
    const fileData = new FileModel({
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size,
      path: req.file.path,
      key: req.file.filename, // Key is set to filename, but adjust if using S3 or similar
      mimetype: req.file.mimetype,
      encoding: req.file.encoding,
      userid: req.user ? req.user._id : null, // Assuming user info from a middleware
    });

    await fileData.save();

    res.status(201).json({
      message: 'File uploaded successfully.',
      file: fileData,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


const getFile = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const file = await FileModel.findById(id);
  return res.sendFile(path.join(__dirname, `./../../${  file.path}`));
});

const deleteFile = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const file = await FileModel.findById(id);
  fs.unlinkSync(path.join(__dirname, `./../../${  file.path}`));
  const result = await FileModel.deleteOne({ _id: id });
  return res.json(result);
});
module.exports = {
  handleUpload,
  getFile,
  getAllFiles,
  deleteFile,
};