const express = require('express');
const {
  createStore,
  getStoreById,
  getStores,
  deleteStorebyId,
  updateStoreById,
  getStoreByUserId,
} = require('../controller/mystores.js');

const { permission } = require('../middlewares');
const { actions } = require('../models/permission');
const StoreRouter = express.Router();

StoreRouter.post('/',  permission(actions.READ_STORE), createStore);
StoreRouter.get('/', permission(actions.READ_STORE), getStores);
StoreRouter.get('/user/:userid', permission(actions.READ_STORE), getStoreByUserId);
StoreRouter.get('/:id', permission(actions.READ_STORE), getStoreById);
StoreRouter.delete('/:id', permission(actions.DELETE_STORE), deleteStorebyId);
StoreRouter.put('/:id', permission(actions.EDIT_STORE), updateStoreById);

module.exports = StoreRouter;
