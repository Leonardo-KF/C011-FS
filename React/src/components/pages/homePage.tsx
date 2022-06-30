import { useNavigate, Link } from "react-router-dom";
import { CardsSection, HomePageSection } from "./AppStyled";
// import { games } from "../../mocks/games";
import { Card } from "../structure/card";
import { gamesApi } from "../../utils/services/gameApi";
import { Game } from "utils/types/game.type";
// import Modal from "react-modal";
import { useState, useEffect } from "react";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     color: "#00ff00",
//     backgroundColor: "gray",
//   },
// };

function HomePage() {
  const [games, setGames] = useState<Game[]>();
  // const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  // const [newGame, setNewGame] = useState<Game>({
  //   id: "124dgssfs",
  //   name: "",
  //   description: "",
  //   genre: "",
  //   price: 0,
  //   score: 0,
  // });
  async function getGames() {
    const gamesList = await gamesApi.getGames();
    setGames(gamesList);
  }

  useEffect(() => {
    getGames();
  }, []);

  console.log(games);

  const navigate = useNavigate();

  function goToBatata() {
    navigate("/batata");
  }

  // function openModal() {
  //   setModalIsOpen(true);
  // }

  // function closeModal() {
  //   setModalIsOpen(false);
  // }

  return (
    <HomePageSection>
      <div>homePage</div>
      <button onClick={goToBatata}>Navegar</button>
      <Link to="/creategame">Create game</Link>
      {/* <button onClick={openModal}>Criar game</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal> */}
      <CardsSection>
        {games?.map((game) => {
          return <Card game={game} key={game.id} />;
        })}
      </CardsSection>
    </HomePageSection>
  );
}

export default HomePage;
