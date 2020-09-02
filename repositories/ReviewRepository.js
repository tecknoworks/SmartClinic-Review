const Review = require('../models/Review')
const Repository = require('./Repository')

class ReviewRepository extends Repository {
    constructor(model) {
        super(model)
    }

    async getRatings(doctorId) {
        let reviews = await Review.find({ doctorId: doctorId }, function (err, res) {
            if (err) {
                return err
            }
        })
        return reviews
    }

    async getNumberOfRatings(doctorId) {

        let reviews = await Review.find({ doctorId: doctorId }, function (err, res) {
            if (err) {
                return err
            }
        })
        return { numberOfRatings: reviews.length }
    }
}

var reviewRepository = new ReviewRepository(Review);
module.exports = reviewRepository;