import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface Props {
  handleOpenModal: () => void;
}

const Header: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo do dtmoney" />
        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
