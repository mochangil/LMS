const models = require('../database/models');

const getAcademies = async (req,res,next) =>{
    try{
        const academies = await models.Academy.findAll();
        res.send(academies);
    } catch(err){
        next(err)
    }

};

const getAcademy = async (req,res,next) => {
    try{
        const id = req.params.id;
        const academy = await models.Academy.findOne({id});
        res.send(academy);
    }catch(err){
        next(err)
    }
}

const createAcademy = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Academy.max('id');
        const newAcademy = models.Academy.build({name: req.params.name});
        newAcademy.set({
            id: counts+1,
            logo: req.params.logo,
            name: req.params.name,
            theme_id: req.params.theme_id
        });
        await newAcademy.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

module.exports = {
    getAcademies,
    getAcademy,
    createAcademy,
};