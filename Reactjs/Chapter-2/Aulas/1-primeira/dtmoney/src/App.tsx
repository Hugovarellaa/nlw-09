import { createServer } from "miragejs";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 300,
          type: "deposit",
          category: "transaction",
          createAt: new Date(),
        },
      ];
    });
  },
});

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
