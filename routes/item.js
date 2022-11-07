const express = require("express");
const router = express.Router();
const ItemController = require('../controller/item.controller');

router.post('/cart', ItemController.createItem);

module.exports = router;