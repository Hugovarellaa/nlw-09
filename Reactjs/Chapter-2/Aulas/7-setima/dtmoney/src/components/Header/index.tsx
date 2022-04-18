import React from "react";

import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo dtmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
