const models = require('../../database/models');

const getClasses = async (req,res,next) =>{
    try{
        const Classes = await models.Class.findAll({});
        res.send(ok);
    } catch(err){
        next(err)
    }

};

const getClass = async (req,res,next) => {
    try{
        const myId = req.params.id;
        console.log(myId);
        const myName = req.params.name;
        const Class = await models.Class.findOne({
            where: {
                name : myName
            } 
        });
        res.send(Class);
    }catch(err){
        next(err)
    }
}

const createClass = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Class.max('id');
        const newClass = models.Class.build({name: req.params.name});
        newClass.set({
            id: counts+1,
            name: req.body.name,
            teacher_id: req.body.teacher_id,
            academy_id: req.body.academy_id
        });
        await newClass.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

const deleteClass = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Class.destroy({
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
    getClasses,
    getClass,
    createClass,
    deleteClass,
};