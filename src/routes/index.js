const express =require('express');
const path = require('path');
const router = express.Router();
const memberRouter = require('./memberRouter')
const academyRouter = require('./academyRouter')
const classroomRouter = require('./classroomRouter')
const lectureRouter = require('./lectureRouter')
const noticeRouter = require('./noticeRouter')
const wordRouter = require('./wordRouter')
const auth = require('./auth')
const middlewares = require('./middlewares')

// 현재 middleware 임시 제거
router.use('/members', memberRouter)
router.use('/academies', academyRouter)
router.use("/classrooms", classroomRouter);
router.use("/notices", noticeRouter);
router.use("/lectures", lectureRouter);
router.use("/words", wordRouter);
// router.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'}));
router.use("/auth", auth);
module.exports = router;