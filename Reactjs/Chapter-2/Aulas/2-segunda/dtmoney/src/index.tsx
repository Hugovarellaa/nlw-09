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
          title: "Salario Frontend",
          amount: 3000,
          type: "deposit",
          category: "Dev",
          createAt: new Date("2022-02-05 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1500,
          type: "withdraw",
          category: "Casa",
          createAt: new Date("2022-02-15 19:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("transactions", () => {
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
