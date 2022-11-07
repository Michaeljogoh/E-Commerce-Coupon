const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const DB = require("./models/index");
const couponRoute = require('./routes/coupon');
const itemRoute = require('./routes/item')


// Bodyparser
app.use(express.json());

// Cross-origin
app.use(cors({ origin: "*", credentials: true }));

// Database Sequelize
DB.sequelize.sync();

// Routes

app.use('/', couponRoute);
app.use('/', itemRoute)

// Server listen to port
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
