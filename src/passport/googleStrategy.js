const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
dotenv.config();
const Teacher = require('../database/models/teacher');
const Student = require('../database/models/student');
const models = require('../database/models')

module.exports = () => {
   passport.use(
      new GoogleStrategy(
         {
            clientID: process.env.GOOGLE_ID, // 구글 로그인에서 발급받은 REST API 키
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/auth/google/callback', // 구글 로그인 Redirect URI 경로
         },
         async (accessToken, refreshToken, profile, done) => {
            console.log('google profile : ', profile);
            console.log('google email : ', profile.emails);
            try {
               const exUser = await models.User.findOne({
                  // 구글 플랫폼에서 로그인 했고 & snsId필드에 구글 아이디가 일치할경우
                  where: {snsId: profile.id, provider: 'google' },
                    // where: {email: profile.emails[0].value},
               });
               // 이미 가입된 구글 프로필이면 성공
               if (exUser) {
                  console.log(1)
                  done(null, exUser); // 로그인 인증 완료
                  
               } else {
                  // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
                  const newUser = await models.User.create({
                    //  email: profile?.email[0].value,
                     email:profile.emails[0].value,
                     name: profile.name['familyName']+profile.name['givenName'],
                     snsId: profile.id,
                     provider: 'google',
                  });
                  done(null, newUser); // 회원가입하고 로그인 인증 완료
               }
            } catch (error) {
               console.error(error);
               done(error);
            }
         },
      ),
   );
};