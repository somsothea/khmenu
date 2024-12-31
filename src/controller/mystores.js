const asyncHandler = require('express-async-handler');
const StoreModel = require('../models/mystores.js');
const redisClient = require('../redis/index.js');
const { PaginationParameters } = require('mongoose-paginate-v2');

/**
 * Controller is a specific function to handle specific tasks
 */

const createStore = asyncHandler(async (req, res) => {
  const Store = new StoreModel(req.body);
  const result = await Store.save();
  // Invalidate Cache
  // const { baseUrl } = req
  // const keys = await redisClient.keys(`${baseUrl}*`)
  // redisClient.del(keys[0])
  return res.json(result);
});

const getStoreById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const Store = await StoreModel.findById(id);
  return res.json(Store);
});

const getStores = asyncHandler(async (req, res) => {
  const options = new PaginationParameters(req).get();
  const Stores = await StoreModel.paginate(...options);
  return res.json(Stores);
});

const deleteStorebyId = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await StoreModel.deleteOne({ _id: id });
  return res.json(result);
});

const updateStoreById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await StoreModel.updateOne({ _id: id }, req.body);
  // const result = await StoreModel.findByIdAndUpdate(id, req.body)
  return res.json(result);
});

const getStoreByUserId = asyncHandler(async (req, res) => {
  const { userid } = req.params; // Extract userid from URL parameters
  const options = new PaginationParameters(req).get();
  
  // Query to find all stores by userid
  const Stores = await StoreModel.paginate({ userid:userid }, options);

  if (!Stores.docs || Stores.docs.length === 0) {
    return res.status(404).json({ message: 'No stores found for this user.' });
  }

  return res.json(Stores);
});

module.exports = {
  createStore,
  getStoreById,
  getStores,
  deleteStorebyId,
  updateStoreById,
  getStoreByUserId,
};
