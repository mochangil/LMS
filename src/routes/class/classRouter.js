const express = require('express')
const router = express.Router()
const classController = require('../../controllers/class/classController')
const lectureRouter = require('./lectureRouter')
const noticeRouter = require('./noticeRouter')

router.get("/", classController.getClass)
router.post("/", classController.createClass)
router.get("/:id", classController.getClass)
router.post("/delete", classController.deleteClass);
router.use("/notices", noticeRouter);
router.use("/lectures", lectureRouter);

module.exports = router