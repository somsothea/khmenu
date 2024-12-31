const asyncHandler = require('express-async-handler');
const { PaginationParameters } = require('mongoose-paginate-v2');
const ItemModel = require('../models/myitems.js');
/**
 * Controller is a specific function to handle specific tasks
 */

const createItem = asyncHandler(async (req, res) => {
  const Store = new ItemModel(req.body);
  const result = await Store.save();
  // Invalidate Cache
  // const { baseUrl } = req
  // const keys = await redisClient.keys(`${baseUrl}*`)
  // redisClient.del(keys[0])
  return res.json(result);
});

const getItemById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const Store = await ItemModel.findById(id);
  return res.json(Store);
});

const getItems = asyncHandler(async (req, res) => {
  // Intentionally make response 20s long
  // setTimeout(async () => {
  //     const options = new PaginationParameters(req).get()
  //     const Items = await ItemModel.paginate(...options)
  //     return res.json(Items)
  // }, 20 * 1000)
  const options = new PaginationParameters(req).get();
  const Items = await ItemModel.paginate(...options);
  return res.json(Items);
});

const deleteItembyId = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await ItemModel.deleteOne({ _id: id });
  return res.json(result);
});

const updateItemById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await ItemModel.updateOne({ _id: id }, req.body);
  return res.json(result);
});

const getItemByStoreId = asyncHandler(async (req, res) => {
  const { storeid } = req.params;
  const options = new PaginationParameters(req).get();
  
  // Query to find all stores by userid
  const items = await ItemModel.paginate({ storeid:storeid }, options);

  if (!items.docs || items.docs.length === 0) {
    return res.status(404).json({ message: 'No Items found for this store.' });
  }

  return res.json(items);
});

module.exports = {
  createItem,
  getItemById,
  getItems,
  deleteItembyId,
  updateItemById,
  getItemByStoreId
};
