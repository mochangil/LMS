const express = require('express')
const router = express.Router()
const {academyController} = require('../controllers')

router.get("/", academyController.getAcademies)
router.post("/", academyController.createAcademy)
router.post("/delete", academyController.deleteAcademy)
module.exports = router