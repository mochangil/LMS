const models = require('../database/models');

const getTeachers = async (req,res,next) =>{
    try{
        const teachers = await models.Teacher.findAll();
        res.send(teachers);
    }
    catch (err){
        next(err);
    }
};

const createTeacher = async (req,res,next) =>{
    try{
        console.log("connected")
        const counts = await models.Teacher.max('id');
        const newTeacher = models.Teacher.build({name: req.params.name});
        newTeacher.set({
            id: counts+1,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            academy_id: req.body.academy_id
        })
        await newTeacher.save();
        res.send(newTeacher);
    } catch (err){
        next(err);
    }
}

const getTeacher = async (req,res,next) => {
    try{
        const id = req.params.id;
        const teacher = await models.Teacher.findOne({id});
        res.send(teacher);
    } catch(err){
        next(err)
    }
}
module.exports = {
    getTeachers,
    createTeacher,
    getTeacher,
};