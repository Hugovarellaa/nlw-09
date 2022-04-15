import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

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
          title: "Salario",
          amount: 3000,
          type: "deposit",
          category: "Emprego",
          createAt: new Date("2022-02-02 10:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1000,
          type: "withdraw",
          category: "Casa",
          createAt: new Date("2022-02-10 10:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", (schema) => {
      return schema.all("transaction");
    });
    this.post("/transactions", (schema, req) => {
      const response = JSON.parse(req.requestBody);
      return schema.create("transaction", response);
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
