import React from "react";
import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
