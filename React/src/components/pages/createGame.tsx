import { FormStyle } from "components/structure/form.style";
import { Game } from "utils/types/game.type";
import { CreateGameStyles } from "./createGame.style";
// import { games } from "../../mocks/games";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { gamesApi } from "utils/services/gameApi";

export function CreateGame() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newGame: Game = {
      id: uuidv4(),
      name: event.currentTarget.Name.value,
      description: event.currentTarget.description.value,
      genre: event.currentTarget.genre.value,
      price: event.currentTarget.price.value,
      score: event.currentTarget.score.value,
    };

    console.log(newGame);

    await gamesApi.postGame(newGame);

    navigate("/");
  }

  return (
    <CreateGameStyles>
      <FormStyle onSubmit={handleSubmit}>
        <h2>Modal lindo de criação</h2>
        <label>Name:</label>
        <input
          type="text"
          // onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
          name="Name"
        />
        <label>Description:</label>
        <input type="text" name="description" />
        <label>Score:</label>
        <input type="number" name="score" />
        <label>Genre:</label>
        <input type="text" name="genre" />
        <label>Price:</label>
        <input type="number" name="price" />
        <button type="submit">Criar</button>
      </FormStyle>
    </CreateGameStyles>
  );
}
