import React from "react";
import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

interface Props {
  handleOpenModal: () => void;
}

const Header: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo dtmoney" />
        <button onClick={handleOpenModal}>Nova Transacao</button>
      </Content>
    </Container>
  );
};

export default Header;
