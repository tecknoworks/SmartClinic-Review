var express = require("express");
var router = express.Router();
const ReviewService = require('../services/ReviewService')

router.get("/getAll", ReviewService.get)
router.post("/insert", ReviewService.insertReview)
router.get("/getAverageRating/:id", ReviewService.getRatingAverage)
router.get("/getReviews/:id", ReviewService.getAllRatings)
router.delete("/delete/:id", ReviewService.deleteReview)

module.exports = router