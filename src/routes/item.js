const express = require ('express')
const {getItems, getItemById, getItemByStoreId} = require('../controller/item')
const router = express.Router();

router.get('/', getItems)
router.get('/:id', getItemById)
router.get('/store/:storeId', getItemByStoreId)

module.exports = router