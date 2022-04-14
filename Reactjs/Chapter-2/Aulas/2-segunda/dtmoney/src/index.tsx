import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer } from "miragejs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  routes() {
    this.namespace = "api";
    this.get("transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 4000,
          type: "deposit",
          category: "Outros",
          createAt: new Date("2022-02-02 10:00:00"),
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: 8000,
          type: "whitdraw",
          category: "Outros 2",
          createAt: new Date("2022-02-12 10:00:00"),
        },
      ];
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
