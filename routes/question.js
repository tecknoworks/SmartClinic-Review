var express = require("express");
var router = express.Router();
const QuestionService = require('../services/QuestionService');
const Question = require("../models/Question");

router.post("/getAll", QuestionService.get)
router.post("/insert", QuestionService.insertQuestion)
router.get("/getByStatus", QuestionService.getQuestionsByStatus)
router.delete("/delete/:id", QuestionService.deleteQuestion)
router.put("/updateStatus/:id", QuestionService.updateStatus)
router.put("/updateResponse/:id", QuestionService.updateResponse)

module.exports = router