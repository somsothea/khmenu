const express = require ('express')
const {getStores, getStoreById} = require('../controller/store')
const router = express.Router();

router.get('/', getStores)
router.get('/:id', getStoreById)

module.exports = router