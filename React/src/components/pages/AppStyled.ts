import styled from "styled-components";

type Button1 = {
  primary?: boolean;
  cor?: string;
};

export const AddButton = styled.button<Button1>`
  background-color: ${(props) => {
    if (props.primary) {
      return "red";
    } else {
      return "blue";
    }
  }};
  border-color: blue;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.6s;
  :hover {
    background-color: ${(props) => props.cor};
    transform: scale(1.1);
  }
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardsSection = styled.section`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HomePageSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
