const express = require('express')
const router = express.Router()
const {memberController} = require('../controllers')

router.get("/teachers", memberController.getTeachers)
router.post("/teachers", memberController.createTeacher)
router.get("/teachers/:id", memberController.getTeacher)
router.get("/students", memberController.getStudents)
router.post("/students", memberController.createStudent)
router.get("/students/:id", memberController.getStudent)


module.exports = router