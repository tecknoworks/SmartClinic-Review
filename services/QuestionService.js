const QuestionRepository = require('../repositories/QuestionRepository');

let get = async (req, res, next) => {
    if (req.body.role == 'DOCTOR') {
        await QuestionRepository.getDoctorQuestions()
            .then(
                question => {
                    res.json(question)
                }
            )
            .catch(err => next(err))
    }
    else if (req.body.role == 'PATIENT') {
        await QuestionRepository.getPatientQuestions()
            .then(
                question => {
                    res.json(question)
                }
            )
            .catch(err => next(err))
    }
    else {
        await QuestionRepository.get()
            .then(
                question => {
                    res.json(question)
                }
            )
            .catch(err => next(err))
    }
}

let insertQuestion = async (req, res, next) => {
    await QuestionRepository.create(req.body)
        .then(
            question => {
                res.json(question)
            }
        )
        .catch(err => next(err))
}

let deleteQuestion = async (req, res, next) => {
    await QuestionRepository.remove(req.params.id)
        .then(
            question => {
                res.json(question)
            }
        )
        .catch(err => next(err))
}

let getQuestionsByStatus = async (req, res, next) => {
    await QuestionRepository.getQuestionsByStatus(req.body.status)
        .then(
            question => {
                res.json(question)
            }
        )
        .catch(err => next(err))
}

let updateStatus = async (req, res, next) => {
    await QuestionRepository.updateStatus(req.params.id, { ...req.body })
        .then(
            question => {
                res.json(question)
            }
        )
        .catch(err => next(err))
}

let updateResponse = async (req, res, next) => {
    await QuestionRepository.updateResponse(req.params.id, { ...req.body })
        .then(
            question => {
                res.json(question)
            }
        )
        .catch(err => next(err))
}

module.exports = { get, insertQuestion, deleteQuestion, getQuestionsByStatus, updateStatus, updateResponse }