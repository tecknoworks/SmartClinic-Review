var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            require: true
        },
        response: {
            type: String,
            default: ' '
        },
        userId: {
            type: String,
            require: true
        },
        status: {
            type: String,
            require: true
        },
        doctorId: {
            type: String,
            require: false
        }
    }
)

const Question = mongoose.model('Question', questionSchema)   
module.exports = Question