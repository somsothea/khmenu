const BookModel = require('../models/book.js')

async function getItems(req, res){
    const items = await BookModel.find()
    return res.json(items)
}

async function getItemById(req, res){
    const {id} = req.params;
    const item = await BookModel.findById(id);
    return res.json(item);
}

module.exports = {
    getItemById,
    getItems,
  };
  