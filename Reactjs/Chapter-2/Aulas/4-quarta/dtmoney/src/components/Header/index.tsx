import React from "react";

import LogoImg from "../../assets/logo.svg";
import { useTransaction } from "../../hooks/useTransaction";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  const { handleOpenModal } = useTransaction();
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
