const express = require('express')
const router = express.Router()
const lectureController = require('../controllers/lectureController')


router.get("/", lectureController.getLectures)
router.post("/", lectureController.createLecture)
router.get("/:id", lectureController.getLecture)
router.post("/delete", lectureController.deleteLecture)

module.exports = router