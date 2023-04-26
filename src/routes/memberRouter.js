const express = require('express')
const router = express.Router()
const {memberController} = require('../controllers')

router.get("/teachers", memberController.getTeachers)

module.exports = router