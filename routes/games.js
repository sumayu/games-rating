const gamesRouter = require("express").Router(); // Создали роутер
const { getAllGames, deleteGame, addGameController } = require("../controllers/games")

gamesRouter.get("/games", getAllGames)
gamesRouter.delete("/games/:id", deleteGame);
gamesRouter.post("/games", addGameController) 
module.exports = gamesRouter;