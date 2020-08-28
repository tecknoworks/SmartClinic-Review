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
            type: mongoose.Schema.Types.ObjectId,
            require: true
        },
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
        }
    }
)

const Review = mongoose.model('Review', reviewSchema)   
module.exports = Review