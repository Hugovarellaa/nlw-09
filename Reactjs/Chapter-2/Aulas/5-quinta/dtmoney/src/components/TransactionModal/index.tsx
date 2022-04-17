import React, { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransaction } from "../../hooks/useTransaction";

import { Container, Content, Radiobox } from "./styles";

const TransactionModal: React.FC = () => {
  const { createTransaction, isOpenModal, handleCloseModal } = useTransaction();
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
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={handleCloseModal} className="close-icon-modal">
        <img src={closeImg} alt="Fecha botao" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Cadastra transação</h2>
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
          <Radiobox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </Radiobox>
          <Radiobox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saidas" />
            <span>Saidas</span>
          </Radiobox>
        </Content>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastra</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
