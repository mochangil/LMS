const models = require('../database/models');

const getAcademies = async (req,res,next) =>{
    try{
        const academies = await models.Academy.findAll({
            where:req.query
        });
        res.send(academies);
    } catch(err){
        next(err)
    }

};


const createAcademy = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Academy.max('id');
        const newAcademy = models.Academy.build({name: req.params.name});
        newAcademy.set({
            id: counts+1,
            logo: req.body.logo,
            name: req.body.name,
            theme_id: req.body.theme_id
        });
        await newAcademy.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

const deleteAcademy = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Academy.destroy({
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
    getAcademies,
    createAcademy,
    deleteAcademy,
};