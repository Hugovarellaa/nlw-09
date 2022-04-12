import React from "react";
import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface Props {
  onOpenModal: () => void;
}

const Header: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo dtmoney" />
        <button onClick={onOpenModal}>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
