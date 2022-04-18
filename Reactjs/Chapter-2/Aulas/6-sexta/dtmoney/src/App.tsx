import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { makeServer } from "./services/mirage-js";
import { GlobalStyles } from "./styles/GlobalStyles";
import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }
  function handleCloseModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
