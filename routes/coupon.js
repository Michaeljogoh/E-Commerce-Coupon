const express = require("express");
const router = express.Router();
const couponController = require('../controller/coupon.controller');

router.post('/coupon', couponController.createCoupon );

module.exports = router;
