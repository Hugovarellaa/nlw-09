import React from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

interface Props {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const TransactionModal: React.FC<Props> = ({
  isModalOpen,
  handleCloseModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={handleCloseModal} className="close-icon-modal">
        <img src={closeImg} alt="Fecha modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
