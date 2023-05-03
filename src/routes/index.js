const express =require('express');
const path = require('path');
const router = express.Router();
const memberRouter = require('./memberRouter')
const academyRouter = require('./academy/academyRouter')
const classRouter = require('./class/classRouter')
// GET / 라우터
// router.get('/', (req, res) => {
//     res.sendFile('home.html', { root: path.join(__dirname, '../public/html') })
// });

router.use('/members',memberRouter)
router.use('/academies', academyRouter)
router.use("/classes", classRouter);

module.exports = router;