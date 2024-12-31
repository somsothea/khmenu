const ItemModel = require('../models/myitems.js')

async function getItems(req, res){
    const items = await ItemModel.find()
    return res.json(items)
}

async function getItemById(req, res){
    const {id} = req.params;
    const item = await ItemModel.findById(id);
    return res.json(item);
}
async function getItemByStoreId(req, res) {
    const { storeid } = req.params; // Extract storeId from query params
    try {
      const item = await ItemModel.find({ storeid:storeid }); // Filter items by storeId
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
  