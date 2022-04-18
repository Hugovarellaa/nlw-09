import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { makeServer } from "./services/mirage-js";
import { GlobalStyles } from "./styles/GlobalStyles";
import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

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
