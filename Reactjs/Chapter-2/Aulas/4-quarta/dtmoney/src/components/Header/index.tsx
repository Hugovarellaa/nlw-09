import React from "react";

import LogoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface Props {
  handleOpenModal: () => void;
}

const Header: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo Dtmoney" />
        <button onClick={handleOpenModal}>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
