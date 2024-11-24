const express = require ('express')
const {getItems, getItemById} = require('../controller/item')
const router = express.Router();

router.get('/', getItems)
router.get('/:id', getItemById)

module.exports = router