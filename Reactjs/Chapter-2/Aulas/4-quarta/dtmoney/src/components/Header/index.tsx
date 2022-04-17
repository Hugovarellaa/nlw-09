import React from "react";

import LogoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo Dtmoney" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
