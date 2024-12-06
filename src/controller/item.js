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
async function getItemByStoreId(req, res) {
    const { storeId } = req.query; // Extract storeId from query params
    try {
      const item = await BookModel.find({ storeId }); // Filter items by storeId
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items" });
    }
  }

module.exports = {
    getItemById,
    getItems,
    getItemByStoreId
  };
  