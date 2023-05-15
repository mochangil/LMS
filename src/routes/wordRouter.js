const express = require('express')
const router = express.Router()
const wordController = require('../controllers/wordController')

router.get("/", wordController.getWords)
router.post("/", wordController.createWord)
router.get("/:id", wordController.getWord)
router.post("/delete", wordController.deleteWord)

module.exports = router