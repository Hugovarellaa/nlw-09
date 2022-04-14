import React from "react";
import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import { useTransaction } from "../../hooks/TransactionContext";

const Header: React.FC = () => {
  const { handleOpenModal } = useTransaction();
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
