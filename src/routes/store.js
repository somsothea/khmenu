const express = require ('express')
const {getStores, getStoreById, getStoreByURL, getStoreByUserId} = require('../controller/store')
const router = express.Router();

router.get('/', getStores)
router.get('/:id', getStoreById)
router.get('/user/:userid', getStoreByUserId)
router.get('/url/:storeurl', getStoreByURL)

module.exports = router