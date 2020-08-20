var express = require('express');
var router = express.Router();

const reviewRouter = require('./review');
const questionRouter = require('./question')

router.use('/review', reviewRouter);
router.use('/question', questionRouter)

module.exports = router;
