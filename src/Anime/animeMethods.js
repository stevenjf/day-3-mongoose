const Anime = require("./animeModels");

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