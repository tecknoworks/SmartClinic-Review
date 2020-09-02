const ReviewRepository = require('../repositories/ReviewRepository');

let get = async (req, res, next) => {
    await ReviewRepository.get()
        .then(
            reviews => {
                res.json(reviews)
            }
        )
        .catch(err => next(err))
}

let insertReview = async (req, res, next) => {
    await ReviewRepository.create(req.body)
        .then(
            review => {
                res.json(review)
            }
        )
        .catch(err => next(err))
}

let getRatingAverage = async (req, res, next) => {
    await ReviewRepository.getRatings(req.params.id)
        .then(rating => {
            let rate = 0
            rating.forEach(element => {
                rate += element.rating
            })
            res.json(rate / rating.length)
        })
        .catch(err => next(err))
}

let getAllRatings = async (req, res, next) => {
    await ReviewRepository.getRatings(req.params.id)
        .then(
            ratings => {
                res.json(ratings)
            })
        .catch(err => next(err))
}

let getNumberOfRatings = async (req, res, next) => {
    await ReviewRepository.getNumberOfRatings(req.params.id)
        .then(
            ratings => {
                res.json(ratings)
            })
        .catch(err => next(err))
}


let deleteReview = async (req, res, next) => {
    let reviewId = req.params.id
    await ReviewRepository.remove(reviewId)
        .then(
            rating => {
                res.json(rating)
            }
        )
        .catch(err => next(err))
}

module.exports = { get, insertReview, getRatingAverage, getAllRatings, deleteReview, getNumberOfRatings }