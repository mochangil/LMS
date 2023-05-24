const dotenv = require('dotenv');
dotenv.config();
const env = process.env;

const development = {
    username: env.DB_USER_AWS,
    password: env.DB_PASSWORD_AWS,
    database: env.DB_NAME_AWS,
    host: env.DB_HOST_AWS,
    dialect: "mysql",
    port: 3306
};

const production = {
    username: env.DB_USER_AWS,
    password: env.DB_PASSWORD_AWS,
    database: env.DB_NAME,
    host: env.DB_HOST_AWS,
    dialect: "mysql",
    port: 3306
};

const test = {
    username: env.DB_USER_AWS,
    password: env.DB_PASSWORD_AWS,
    database: env.DB_NAME,
    host: env.DB_HOST_AWS,
    dialect: "mysql",
    port: 3306
};

const pool = {
    max: 20,
    min: 0,
    idle: 5000
};

const logging = true


module.exports = {development, production, test};