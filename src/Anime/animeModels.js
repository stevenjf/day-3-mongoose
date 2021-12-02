const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
    title: {
        type: String, 
        unique: true,
        require: true
    },
    mainCharacter: {
        type: String
    }, 
    releaseDate: {
        type: String
    }
})

const Anime = mongoose.model("anime", animeSchema);

module.exports = Anime;
