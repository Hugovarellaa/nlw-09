import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
