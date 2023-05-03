const express = require('express')
const router = express.Router()
const {memberController} = require('../controllers')

router.get("/teachers", memberController.getTeachers)
router.post("/teachers", memberController.createTeacher)
router.get("/teachers/:id", memberController.getTeacher)


module.exports = router