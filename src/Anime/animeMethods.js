const Anime = require("./animeModels");

const mongoose = require("mongoose");

exports.addAnime = async (animeObj) => {
    try {
        const anime = await new Anime(animeObj);
        await anime.save();
        console.log(`Successfully added ${anime.title}`)
    } catch (error) {
        console.log(error);
    }
};

exports.listAnime = async () => {
    try {
        console.log(await Anime.find({}));
    } catch (error) {
        console.log(error);
    }
};

exports.deleteAnime = async (title) => {
    try{
        await Anime.deleteOne({title: title});
        console.log(`successfully Deleted ${title}`)
    }catch (error) {
        console.log(error);
    }
}

exports.updateAnime = async (animeId, animeObj) => {
    try {
        const anime = await Anime.findById(animeId);
        console.log(await Anime.findByIdAndUpdate({_id: animeId._id}, (animeObj),
            {upsert: true, new: true, runValidators: true}))
        console.log(`Successfully Updated ${anime.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    } 
};