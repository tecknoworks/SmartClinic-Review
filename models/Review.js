var mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        description: {
            type: String
        },
        rating: {
            type: Number,
            require: true
        },
        userId: {
            type: String,
            require: true
        },
        doctorId: {
            type: String,
            require: true
        }
    }
)

const Review = mongoose.model('Review', reviewSchema)   
module.exports = Review