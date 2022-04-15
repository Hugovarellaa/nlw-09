import React from "react";
import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import { useTransaction } from "../../hooks/useTransaction";

const Header: React.FC = () => {
  const { handleOpenModal } = useTransaction();
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo dt money" />
        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
