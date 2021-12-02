require("./db/connection");
const yargs = require("yargs");
const {addAnime, listAnime, deleteAnime} = require("./Anime/animeMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addAnime({title: args.title, mainCharacter: args.mainCharacter, releaseDate: args.releaseDate});
        break;
        case "list":
            listAnime();
        break;
        case "delete":
            deleteAnime(args.title)
        break;
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);