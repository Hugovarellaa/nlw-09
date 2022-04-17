import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";
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
      <GlobalStyles />
      <TransactionModal />
    </TransactionProvider>
  );
};

export default App;
