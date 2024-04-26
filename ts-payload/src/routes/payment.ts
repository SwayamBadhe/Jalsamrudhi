const express = require('express');
const donateRouter = express.Router();

const { order, validateOrder } = require('../controllers/payment');

donateRouter.route('/').post(order);
donateRouter.route('/validate').post(validateOrder);

module.exports = donateRouter;
