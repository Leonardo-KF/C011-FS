import axios from "axios";
import { Game } from "../types/game.type";

axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.headers.post["content-type"] = "application/json";

export const gamesApi = {
  getGames: async () => {
    try {
      const req = await axios.get("/comments");
      return req.data;
    } catch (err) {
      alert(err);
    }
  },
  postGame: async (newGame: Game) => {
    try {
      const req = await axios.post("comments", {
        data: {
          name: newGame.name,
          description: newGame.description,
          price: newGame.price,
          score: newGame.score,
          genre: newGame.genre,
        },
      });
      return req.data;
    } catch (err) {
      alert(err);
    }
  },
};
