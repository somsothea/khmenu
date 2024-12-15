const express = require ('express')
const {getStores, getStoreById, getStoreByUserId} = require('../controller/store')
const router = express.Router();

router.get('/', getStores)
router.get('/:id', getStoreById)
router.get('/user/:userid', getStoreByUserId)

module.exports = router