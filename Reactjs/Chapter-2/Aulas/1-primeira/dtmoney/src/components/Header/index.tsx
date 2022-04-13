import React from "react";

import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Logo dtmoney" />
          <button>Nova Transacao</button>
        </Content>
      </Container>
    </>
  );
};

export default Header;
