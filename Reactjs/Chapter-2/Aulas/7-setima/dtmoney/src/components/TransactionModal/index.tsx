import React, { useState } from "react";
import Modal from "react-modal";
import { useTransaction } from "../../hooks/useTransaction";
import { Container, Content, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

const TransactionModal: React.FC = () => {
  const { modalIsOpen, handleCloseModal } = useTransaction();
  const [type, setType] = useState("deposit");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" onClick={handleCloseModal}>
        <img src={closeImg} alt="Botao de Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="text" placeholder="Valor" />
        <Content>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saidas" />
            <span>Saidas</span>
          </RadioBox>
        </Content>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastra</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
