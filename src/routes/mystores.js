const express = require('express');
const {
  createStore,
  getStoreById,
  getStores,
  deleteStorebyId,
  updateStoreById,
  getStoreByUserId,
} = require('../controller/mystores.js');

const StoreRouter = express.Router();

StoreRouter.post('/', createStore);
StoreRouter.get('/', getStores);
StoreRouter.get('/user/:userid', getStoreByUserId);
StoreRouter.get('/:id', getStoreById);
StoreRouter.delete('/:id', deleteStorebyId);
StoreRouter.put('/:id', updateStoreById);

module.exports = StoreRouter;
