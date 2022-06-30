import { useState } from "react";
import { AddButton, Container } from "components/pages/AppStyled";

function App() {
  const [numero, setNumero] = useState<number>(0);

  function addNumber() {
    let num = numero + 1;
    setNumero(num);
  }

  return (
    <Container>
      <h1>{numero}</h1>
      <AddButton primary={false} cor={"green"} onClick={addNumber}>
        Clique
      </AddButton>
    </Container>
  );
}

export default App;
