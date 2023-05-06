const models = require('../database/models');

const getLectures = async (req,res,next) =>{
    try{
        console.log("wow")
        const lectures = await models.Lecture.findAll({
             attributes: ['id','title','link','classroom_id','createdAt','updatedAt']
        });
        res.send(lectures);
    } catch(err){
        next(err)
    }

};

const getLecture = async (req,res,next) => {
    try{
        const myId = req.params.id;
        console.log(myId);
        const myName = req.params.name;
        const Lecture = await models.Lecture.findOne({
            attributes: ['id','title','link','classroom_id','createdAt','updatedAt'],
            where: {
                id : myId
            } 
        });
        res.send(Lecture);
    }catch(err){
        next(err)
    }
}

const createLecture = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Lecture.max('id');
        const newLecture = models.Lecture.build({title: req.body.title});
        newLecture.set({
            id: counts+1,
            title: req.body.title,
            link: req.body.link,
            classroom_id: req.body.classroom_id,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        });
        await newLecture.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

const deleteLecture = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Lecture.destroy({
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
    getLectures,
    getLecture,
    createLecture,
    deleteLecture,
};