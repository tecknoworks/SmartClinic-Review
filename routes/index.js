var express = require('express');
var router = express.Router();

const reviewRouter = require('./review');

router.use('/review', reviewRouter);

module.exports = router;
