const passport = require('passport');
const local = require('./localStrategy'); // 로컬서버로 로그인할때
const google = require('./googleStrategy'); // 구글서버로 로그인할때

const models = require('../database/models');
const Teacher = require('../database/models/teacher');
const Student = require('../database/models/student');

module.exports = () => {

   passport.serializeUser((user, done) => {
      done(null, user.id);
   });

   passport.deserializeUser((id, done) => {
      models.User.findOne({ where: { id } })
         .then(user => done(null, user))
         .catch(err => done(err));
   }); 

   local();
   google(); // 구글 전략 등록
};