const express = require('express');
const {
  createItem,
  getItems,
  getItemById,
  deleteItembyId,
  updateItemById,
  getItemByStoreId,
} = require('../controller/myitems.js');
const { permission } = require('../middlewares');
const { actions } = require('../models/permission');

const ItemRouter = express.Router();

ItemRouter.post('/', permission(actions.CREATE_ITEM), createItem);
ItemRouter.get('/', permission(actions.READ_ITEM), getItems);
ItemRouter.get('/store/:storeid', permission(actions.READ_ITEM),getItemByStoreId);
ItemRouter.get('/:id', permission(actions.READ_ITEM), getItemById);
ItemRouter.delete('/:id', permission(actions.DELETE_ITEM), deleteItembyId);
ItemRouter.put('/:id', permission(actions.EDIT_ITEM), updateItemById);

module.exports = ItemRouter;
