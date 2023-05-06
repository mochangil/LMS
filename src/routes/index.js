const express =require('express');
const path = require('path');
const router = express.Router();
const memberRouter = require('./memberRouter')
const academyRouter = require('./academy/academyRouter')
const classroomRouter = require('./class/classroomRouter')
const lectureRouter = require('./lectureRouter')
const noticeRouter = require('./noticeRouter')

// GET / 라우터
// router.get('/', (req, res) => {
//     res.sendFile('home.html', { root: path.join(__dirname, '../public/html') })
// });

router.use('/members',memberRouter)
router.use('/academies', academyRouter)
router.use("/classrooms", classroomRouter);
router.use("/notices", noticeRouter);
router.use("/lectures", lectureRouter);
module.exports = router;