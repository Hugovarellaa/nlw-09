import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Frontend Development",
          amount: 3000,
          type: "deposit",
          category: "Salario",
          createAt: new Date("2022-02-15 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1000,
          type: "withdraw",
          category: "Casa",
          createAt: new Date("2022-02-20 12:00:00"),
        },
        {
          id: 3,
          title: "Comida",
          amount: 1000,
          type: "withdraw",
          category: "Compras",
          createAt: new Date("2022-02-25 14:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create("transaction", data);
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
