import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";
import { GlobalStyles } from "./styles/GlobalStyles";
import Modal from "react-modal";

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
