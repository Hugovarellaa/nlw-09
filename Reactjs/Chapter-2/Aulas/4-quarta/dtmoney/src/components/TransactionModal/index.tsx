import React, { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransaction } from "../../hooks/useTransaction";

import { Container, Content, RadioBox } from "./styles";

const TransactionModal: React.FC = () => {
  const { modalIsOpen, handleCloseModal, createTransaction } = useTransaction();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = { title, amount, type, category };

    await createTransaction(data);
    handleCloseModal();
    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-container"
      className="react-modal-content"
    >
      <button type="button" className="closeButton" onClick={handleCloseModal}>
        <img src={closeImg} alt="Fecha modal no X" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
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

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
