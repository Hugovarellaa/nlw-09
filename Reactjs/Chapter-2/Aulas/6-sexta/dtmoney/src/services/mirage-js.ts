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
            title: "Mc Donalds",
            amount: 400,
            type: "withdraw",
            category: "Food",
            createAt: new Date("2022-02-02 10:00:00"),
          },
          {
            id: 2,
            title: "Desenvolvimento de website",
            amount: 4400,
            type: "deposit",
            category: "Salario",
            createAt: new Date("2022-02-10 12:00:00"),
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
