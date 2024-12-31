const StoreModel = require('../models/mystores.js')

async function getStores(req, res){
    const stores = await StoreModel.find()
    return res.json(stores)
}

async function getStoreById(req, res){
    const {id} = req.params;
    const store = await StoreModel.findById(id);
    return res.json(store);
}

async function getStoreByURL(req, res){
  const {storeurl} = req.params;
  const store = await StoreModel.findOne({ storeurl: storeurl });
  return res.json(store);
}

async function getStoreByUserId(req, res){
    const { userid } = req.params; // Extract userId from query parameters
    try {
      const store = await StoreModel.findOne({ userid:userid }); // Filter stores by userId
      res.json(store);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stores" });
    }
}
  
module.exports = {
    getStoreById,
    getStoreByURL,
    getStores,
    getStoreByUserId
  };
  