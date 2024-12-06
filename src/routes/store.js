const express = require ('express')
const {getStores, getStoreById, getStoreByUserId} = require('../controller/store')
const router = express.Router();

router.get('/', getStores)
router.get('/:id', getStoreById)
router.get('/:userId', getStoreByUserId)

module.exports = router