const express = require('express')
const router = express.Router()
const {academyController} = require('../controllers')

router.get("/", academyController.getAcademies)
router.post("/", academyController.createAcademy)
router.get("/:id", academyController.getAcademy)

module.exports = router