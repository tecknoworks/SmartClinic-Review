const Question = require('../models/Question')
const Repository = require('./Repository')

class QuestionRepository extends Repository {
    constructor(model) {
        super(model)
    }

    async getQuestionsByStatus(status) {
        let questions = await Question.find({ status: status }, function (err, res) {
            if (err) {
                return err
            }
        })
        return questions
    }

    async getPatientQuestions() {
        let questions = await Question.find()
        const response = questions.filter(function (question) {
            return question.status == "ANSWERED"
        })
        return response
    }

    async getDoctorQuestions() {
        let questions = await Question.find()
        const response = questions.filter(function (question) {
            return question.status == "ANSWERED" || question.status == "UNANSWERED"
        })
        return response
    }

    async updateStatus(id, status) {
        const question = await Question.findById(id)
        Object.assign(question, status)
        console.log(' ')
        return await question.save()
    }

    async updateResponse(id, questionParams) {
        const question = await Question.findById(id)
        Object.assign(question, questionParams)
        return await question.save()
    }
}

var questionRepository = new QuestionRepository(Question);
module.exports = questionRepository;