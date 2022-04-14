import React from "react";
import logoImg from "../../assets/logo.svg";
import { useTransaction } from "../../hooks/useTransactionContext";
import { Container, Content } from "./styles";

const Header: React.FC = () => {
  const { handleOpenModal } = useTransaction();
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo do dtmoney" />
        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
