const { coupon } = require("../models");


const createCoupon = async (req, res) => {
    const {title , description , published} = req.body; 
 const New = coupon.create({title , description , published});
 console.log(New)
  res.send('created')
  console.log
};

module.exports = { createCoupon };
