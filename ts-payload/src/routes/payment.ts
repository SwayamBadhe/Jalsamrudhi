const express = require('express');
const donateRouter = express.Router();

const {
  order,
  validateOrder,
  postOrderInfo,
} = require('../controllers/payment');

donateRouter.route('/').post(order);
donateRouter.route('/validate').post(validateOrder);
donateRouter.route('/orderInfo').post(postOrderInfo);

module.exports = donateRouter;
