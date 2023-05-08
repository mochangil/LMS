const models = require('../database/models');

const getWords = async (req,res,next) =>{
    try{
        console.log("wow")
        const words = await models.Word.findAll();
            //  attributes: ['id','context','endDate','classroom_id','createdAt','updatedAt']
        // });
        res.send(words);
    } catch(err){
        next(err)
    }

};

const getWord = async (req,res,next) => {
    try{
        const myId = req.params.id;
        console.log(myId);
        const myName = req.params.name;
        const word = await models.Word.findOne({
            // attributes: ['id','context','endDate','classroom_id','createdAt','updatedAt'],
            where: {
                id : myId
            } 
        });
        res.send(word);
    }catch(err){
        next(err)
    }
}

const createWord = async (req,res,next) => {
    try{
        console.log("connected")
        const counts = await models.Word.max('id');
        const newWord = models.Word.build({context: req.body.context});
        newWord.set({
            id: counts+1,
            word: req.body.word,
            meaning: req.body.meaning,
            classroom_id: req.body.classroom_id,
            chapter: req.body.chapter,
            academy_id: req.body.academy_id
        });
        await newWord.save();
        res.send("ok");
    }catch(err){
        next(err);
    }
}

const deleteWord = async (req,res,next) => {
    try{
        const myId = req.body.id;
        const myName = req.body.name;
        console.log(myId)
        // const name = req.params.name;
        await models.Word.destroy({
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
    getWords,
    getWord,
    createWord,
    deleteWord,
};