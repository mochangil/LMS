//app.js 파일에선, middle ware 처리, 전체적인 routing 처리
const express = require('express');
const models = require('./src/database/models/index')
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const passport = require('passport');
const passportConfig = require('./src/passport')
//index 파일을 불러오지 않았음에도 index를 최우선으로 찾아 시행
const indexRouter = require('./src/routes');

dotenv.config();
passportConfig();

models.sequelize.sync().then(()=> {console.log('connected database')}).catch(err => {console.error('occurred error in database connecting ',err)});

app.set('port', process.env.PORT || 3000);

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}))

//javascript 쉬운 함수 호출법 (param1, parma2) => {return될 값}
//router
//app.get, post, put 등등
//app.use는 일단 무조건 실행 - 주로 미들웨어 역할을 수행
//request 객체를 받고, request를 만지기 쉬운 형태로 바꾸어 다음 get 등이 받게끔 해준다.
app.use(
    //Request 방식 등 log
    morgan('dev'),
    //현재 directory와 명시해준'public'의 directory를 동일시하게 취급한다.
    express.json(),
    express.urlencoded({ extended: false }),
    //쿠키정보를 request 객체에 보기 쉬운 형태로 만들어 넘겨준다.
    cookieParser(process.env.COOKIE_SECRET),
    passport.initialize(),
    passport.session()
);

app.use('/', indexRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'app is listening at port 3000!');
});
