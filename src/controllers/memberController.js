const models = require('../database/models');

const getTeachers = async (ctx) =>{
    const teachers = await models.Teacher.findAll();
    ctx.body = teachers;
};

module.exports = {
    getTeachers,
};