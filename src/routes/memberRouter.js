const express = require('express')
const router = express.Router()
const {memberController} = require('../controllers')

router.get("/",memberController.getUsers)


router.get("/teachers", memberController.getTeachers)
router.post("/teachers", memberController.createTeacher)
router.post("/teachers/update", memberController.updateTeacher)
router.post("/teachers/delete", memberController.deleteTeacher)

// router.post("/teachers/:id", memberController.)
router.get("/students", memberController.getStudents)
router.post("/students", memberController.createStudent)
router.post("/students/update", memberController.updateStudent)
router.post("/students/delete", memberController.deleteStudent)


module.exports = router