import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransactionContext";

Modal.setAppElement("#root");

const App: React.FC = () => {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <TransactionModal />
      <GlobalStyles />
    </TransactionProvider>
  );
};

export default App;
