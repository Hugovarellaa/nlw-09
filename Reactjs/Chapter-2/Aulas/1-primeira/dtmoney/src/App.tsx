import { createServer, Model } from "miragejs";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salario",
          type: "deposit",
          category: "Dev",
          amount: 5000,
          createAt: new Date("2022-03-15 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 2000,
          createAt: new Date("2022-03-20 19:00:00"),
        },
        {
          id: 3,
          title: "Compras",
          type: "withdraw",
          category: "Comida",
          amount: 2000,
          createAt: new Date("2022-03-11 10:00:00"),
        },
        {
          id: 4,
          title: "Academia",
          type: "withdraw",
          category: "Saude",
          amount: 100,
          createAt: new Date("2022-03-05 08:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
