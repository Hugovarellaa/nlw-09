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
            title: "Salario",
            amount: 4000,
            type: "deposit",
            category: "Dev",
            createAt: new Date("2022-02-12 10:00:00"),
          },
          {
            id: 2,
            title: "Aluguel",
            amount: 1000,
            type: "withdraw",
            category: "Casa",
            createAt: new Date("2022-02-15 10:00:00"),
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/transactions", (schema) => {
        return schema.all("transaction");
      });
      this.post("/transactions", (schema, request) => {
        const response = JSON.parse(request.requestBody);
        return schema.create("transaction", response);
      });
    },
  });
  return server;
}
