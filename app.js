const express = require('express');
const models = require('./src/database/models/index')
const bodyParser = require('body-parser');
const app = express();
const swaggerFile = require('./src/swagger/swagger-output.json');
const swaggerUi = require('swagger-ui-express')
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport');
const passportConfig = require('./src/passport')
// const MySQLStore = require("express-mysql-session")(session);
// const jwtOptions = {jwtFrom}
const indexRouter = require('./src/routes');




// const sessionOptions = {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "ahckddlf1234",
//     database: "session_test",
// };
// const sessionStore = new MySQLStore(sessionOptions);
dotenv.config(); 

passportConfig();

const corsOptions = {
    credential : true,
    origin : 'https://snclearning.kro.kr'
}

models.sequelize.sync().then(()=> {console.log('connected database')}).catch(err => {console.error('occurred error in database connecting ',err)});

app.enable("trust proxy");

app.set('port', process.env.PORT || 3000);

app.use(session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
        maxAge : 60*60*1000,
        httpOnly: true,
        secure: true,
    },
    resave: false,
    saveUninitialized: false,
    // store: sessionStore, //session store이 필수적인가
}))

app.use(
    morgan('dev'),
    cors(),
    express.json(),
    express.urlencoded({ extended: false }),
    cookieParser(process.env.COOKIE_SECRET),
    bodyParser.json(),
    passport.initialize(),
    passport.session()
);

app.use('/', indexRouter);
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerFile, {explorer: true}));

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'app is listening at port 3000!');
});
