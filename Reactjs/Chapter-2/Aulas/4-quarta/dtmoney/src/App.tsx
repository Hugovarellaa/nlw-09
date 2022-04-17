import React from "react";
import Dashborad from "./components/Dashborad";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { makeServer } from "./services/mirage-js";
import Modal from "react-modal";
import TransactionModal from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";

Modal.setAppElement("#root");

if (process.env.NODE_ENV === "development") {
  makeServer();
}
const App: React.FC = () => {
  return (
    <TransactionProvider>
      <Header />
      <Dashborad />
      <TransactionModal />
      <GlobalStyles />
    </TransactionProvider>
  );
};

export default App;
