import Modal from "react-modal";
import { Container, Content, RadioBox } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/axios";

interface Props {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}

export function NewTransactionModal({ handleCloseModal, modalIsOpen }: Props) {
  const [type, setType] = useState("deposit");
  const [titlte, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      type,
      titlte,
      amount,
      category,
    };
    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-container"
      className="react-modal-content"
    >
      <button onClick={handleCloseModal}>
        <img src={closeImg} alt="Botao de fecha modal" className="close-icon" />
      </button>
      <Container onClick={handleCreateNewTransaction}>
        <h2>Cadastrar transação </h2>
        <input
          type="text"
          placeholder="Titulo"
          value={titlte}
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
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
