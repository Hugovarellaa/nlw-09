import React, { FormEvent, useState } from "react";
import Modal from "react-modal";

import { Container, Content, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransaction } from "../../TransactionContext";

const TransactionModal: React.FC = () => {
  const { isOpenModal, handleCloseModal, CreateTransaction } = useTransaction();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      amount,
      type,
      category,
    };

    await CreateTransaction(data);
    handleCloseModal();
    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");
  }

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
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <Content>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saidas" />
            <span>Saidas</span>
          </RadioBox>
        </Content>
        <input
          type="text"
          placeholder="categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
