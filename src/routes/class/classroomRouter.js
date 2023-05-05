const express = require('express')
const router = express.Router()
const classController = require('../../controllers/class/classroomController')
const lectureRouter = require('./lectureRouter')
const noticeRouter = require('./noticeRouter')

router.get("/", classController.getClassrooms)
router.post("/", classController.createClassroom)
router.get("/:id", classController.getClassroom)
router.post("/delete", classController.deleteClassroom);
router.use("/notices", noticeRouter);
router.use("/lectures", lectureRouter);

module.exports = router