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
        console.log(req.body.name);
        console.log("connected")
        const counts = await models.Teacher.max('id');
        const newTeacher = models.Teacher.build({name: req.body.name});
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
        const myId = req.params.id;
        const teacher = await models.Teacher.findOne({where:{id:myId}});
        res.send(teacher);
    } catch(err){
        next(err)
    }
}

const getStudents = async (req,res,next) =>{
    try{
        const student = await models.Student.findAll();
        res.send(student);
    }
    catch (err){
        next(err);
    }
};

const createStudent = async (req,res,next) =>{
    try{
        console.log("connected")
        cnt = await models.Student.count();
        if (cnt!=0) {
            cnt = 1
        }
        else{
            cnt = await models.Student.max('id');
        }
        const newStudent = models.Student.build({name: req.params.name});
        newStudent.set({
            id: cnt+1,
            name: req.body.name,
            password: req.body.password,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            academy_id: req.body.academy_id,
        })
        await newStudent.save();
        res.send(newStudent);
    } catch (err){
        next(err);
    }
}

const getStudent = async (req,res,next) => {
    try{
        const myId = req.params.id;
        const student = await models.Student.findOne({where:{id:myId}});
        res.send(student);
    } catch(err){
        next(err)
    }
}
module.exports = {
    getTeachers,
    createTeacher,
    getTeacher,
    getStudent,
    createStudent,
    getStudents
};