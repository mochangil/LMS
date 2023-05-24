const models = require('../database/models');

const getUsers = async (req,res,next) =>{
    try{
        const users = await models.User.findAll({
            where: req.query
        });
        res.send(users);
    } catch(err){
        next(err);
    }
}

const getTeachers = async (req,res,next) =>{
    try{
        var teachers = await models.Teacher.findAll({
            where:req.query
        });
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
        const user = await findUserById(req.body.id);
        const newTeacher = models.Teacher.build({id: req.body.id});
        newTeacher.set({
            email: user.email,
            password: user.password,
            name: user.name,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            snsId: user.snsId,
            provider: user.provider,
            academy_id: req.body.academy_id,
            role: "Teacher"
        })
        await newTeacher.save();
        
        user.set({
            role: "Teacher"
        })
        await user.save();
        
        res.send(newTeacher);
    } catch (err){
        next(err);
    }
}

//authenticated 검증필요
const updateTeacher = async (req,res,next) => {
    try{
        const filters = req.body;
        console.log(filters);
        const myId = req.body.id;
        const teacher = await models.Teacher.findOne({where:{id:myId}});
        teacher.set({
            phoneNumber: req.body.phoneNumber,
            age: req.body.age,
            academy_id: req.body.academy_id,
        })
        await teacher.save();
        res.send(teacher);
    } catch(err){
        next(err)
    }
}

const deleteTeacher = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Teacher.destroy({
            where: {
                id: myId
            }
        });
        await models.User.destroy({
            where: {
                id:myId
            }
        });
        res.send("delete ok")
    }catch(err){
        next(err)
    }
}

const getStudents = async (req,res,next) =>{
    try{
        const student = await models.Student.findAll({
            where: req.query
        });
        res.send(student);
    }
    catch (err){
        next(err);
    }
};

const createStudent = async (req,res,next) =>{
    try{
        const user = await findUserById(req.body.id);
        console.log("connected")
        const student = models.Student.build({id:user.id});
        student.set({
            email: user.email,
            password: user.password,
            name: user.name,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            snsId: user.snsId,
            provider: user.provider,
            classroom_id: req.body.classroom_id,
            academy_id: req.body.academy_id
        })
        await student.save();
        
        res.send(student);
    } catch (err){
        next(err);
    }
}


//authenticated 필요 - 기존정보는 그대로 전달하는 방식으로
const updateStudent = async (req,res,next) => {
    try{
        const student = await findStudentById(req.body.id);
        console.log(student);
        student.set({
            phoneNumber:req.body.phoneNumber,
            age: req.body.age,
            classroom_id: req.body.classroom_id,
            academy_id: req.body.academy_id,
        })
        await student.save();
        res.send(student);
    } catch(err){
        next(err)
    }
}

const deleteStudent = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Student.destroy({
            where: {
                id: myId
            }
        });
        await models.User.destroy({
            where: {
                id:myId
            }
        });
        res.send("delete ok")
    }catch(err){
        next(err)
    }
}
module.exports = {
    getUsers,
    getTeachers,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent,
};