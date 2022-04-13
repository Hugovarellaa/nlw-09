import React from "react";
import Modal from "react-modal";

import { Container } from "./styles";

import closeImg from "../../assets/close.svg";

interface Props {
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

const TransactionModal: React.FC<Props> = ({
  handleCloseModal,
  isOpenModal,
}) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={handleCloseModal}>
        <img
          src={closeImg}
          className="react-close-icon"
          alt="Botao de Fechar modal"
        />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="valor" />
        <input type="text" placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
