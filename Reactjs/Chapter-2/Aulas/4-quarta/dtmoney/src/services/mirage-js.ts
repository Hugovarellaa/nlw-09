/* eslint-disable import/no-anonymous-default-export */
import { createServer, Model } from "miragejs";

export function makeServer() {
  const server = createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Desenvolvimento de website",
            amount: 3000,
            type: "deposit",
            category: "Salario",
            createAt: new Date("2022-02-05 11:00:00"),
          },
          {
            id: 2,
            title: "Aluguel",
            amount: 1000,
            type: "withdraw",
            category: "Casa",
            createAt: new Date("2022-02-10 14:00:00"),
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
  return server;
}
