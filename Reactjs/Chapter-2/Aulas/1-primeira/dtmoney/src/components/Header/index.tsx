import React from "react";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo dtmoney" />
        <button>Nova Transacao</button>
      </Content>
    </Container>
  );
};

export default Header;
