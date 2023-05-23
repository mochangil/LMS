const express = require('express')
const router = express.Router()
const classController = require('../controllers/classroomController')

router.get("/", classController.getClassrooms)
router.post("/", classController.createClassroom)
router.post("/delete", classController.deleteClassroom);

module.exports = router