import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/TransactionContext";

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
