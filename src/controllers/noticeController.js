const models = require('../database/models');

const getNotices = async (req,res,next) =>{
    try{
        console.log("wow")
        const notices = await models.Notice.findAll({
             attributes: ['id','context','endDate','classroom_id','createdAt','updatedAt'],
             where: req.query,
        });
        res.send(notices);
    } catch(err){
        next(err)
    }

};

const createNotice = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Notice.max('id');
        const newNotice = models.Notice.build({context: req.body.context});
        newNotice.set({
            id: counts+1,
            context: req.body.context,
            endDate: req.body.endDate,
            classroom_id: req.body.classroom_id,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        });
        await newNotice.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

const deleteNotice = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Notice.destroy({
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
    getNotices,
    createNotice,
    deleteNotice,
};