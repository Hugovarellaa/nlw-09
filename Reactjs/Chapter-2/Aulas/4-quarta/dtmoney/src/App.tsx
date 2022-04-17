import React, { useState } from "react";
import Dashborad from "./components/Dashborad";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { makeServer } from "./services/mirage-js";
import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";

Modal.setAppElement("#root");

if (process.env.NODE_ENV === "development") {
  makeServer();
}
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
      <Dashborad />
      <TransactionModal
        handleCloseModal={handleCloseModal}
        modalIsOpen={modalIsOpen}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
