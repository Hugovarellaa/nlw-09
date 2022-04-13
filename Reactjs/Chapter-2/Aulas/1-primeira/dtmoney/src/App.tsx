import React, { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal
        handleCloseModal={handleCloseModal}
        isOpenModal={isOpenModal}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
