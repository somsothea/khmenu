const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const fileSchema = new mongoose.Schema({
  filename: { type: String },
  originalname: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String },
  key: { type: String },
  mimetype: { type: String, required: true },
  encoding: { type: String, required: true },
  userid: { type: mongoose.Types.ObjectId, ref: 'Users' },
  createdDate: { type: Date, required: true, default: new Date() },
  etag: { type: String },
  
});
fileSchema.plugin(mongoosePaginate);

const FileModel = mongoose.model('Files', fileSchema);

module.exports = FileModel;