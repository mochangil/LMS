const models = require('../database/models');

const getClassrooms = async (req,res,next) =>{
    try{
        const Classrooms = await models.Classroom.findAll({
            attributes: ['id','name','academy_id','teacher_id']
        });
        res.send(Classrooms);
    } catch(err){
        next(err)
    }

};

const getClassroom = async (req,res,next) => {
    try{
        const myId = req.params.id;
        console.log(myId);
        const myName = req.params.name;
        const Classroom = await models.Classroom.findOne({
            attributes: ['id','name','academy_id','teacher_id'],
            where: {
                id : myId
            } 
        });
        res.send(Classroom);
    }catch(err){
        next(err)
    }
}

const createClassroom = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Classroom.max('id');
        const newClassroom = models.Classroom.build({name: req.body.name});
        newClassroom.set({
            id: counts+1,
            name: req.body.name,
            teacher_id: req.body.teacher_id,
            academy_id: req.body.academy_id
        });
        await newClassroom.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

const deleteClassroom = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Classroom.destroy({
            where: {
                id: myId
            }
        });
        res.send("delete ok")
        
    }catch(err){
        next(err)
    }
}

module.exports = {
    getClassrooms,
    getClassroom,
    createClassroom,
    deleteClassroom,
};