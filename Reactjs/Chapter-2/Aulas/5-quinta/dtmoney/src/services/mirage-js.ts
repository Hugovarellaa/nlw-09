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
            title: "Academia",
            amount: 200,
            type: "withdraw",
            category: "Saude",
            createAt: new Date("2022-02-02"),
          },
          {
            id: 2,
            title: "Salario",
            amount: 3200,
            type: "deposit",
            category: "Emprego",
            createAt: new Date("2022-02-05"),
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
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });
    },
  });
  return server;
}
