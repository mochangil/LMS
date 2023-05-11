const express = require('express')
const router = express.Router()
const {memberController} = require('../controllers')

router.get("/",memberController.getUsers)
router.get("/teachers", memberController.getTeachers)
// router.get("/teachers/:id", memberController.getTeacher)
router.post("/teachers/create", memberController.createTeacher)
router.post("/teachers/update", memberController.updateTeacher)
// router.post("/teachers/delete", memberController.deleteTeacher)

// router.post("/teachers/:id", memberController.)
router.get("/students", memberController.getStudents)
router.post("/students", memberController.createStudent)
router.get("/students/:id", memberController.getStudent)
router.post("/students/update", memberController.updateStudent)


module.exports = router