import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";
import { GlobalStyles } from "./styles/GlobalStyles";
import Modal from "react-modal";
import { makeServer } from "./services/mirage-js";

Modal.setAppElement("#root");

if (process.env.NODE_ENV === "development") {
  makeServer();
}

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
