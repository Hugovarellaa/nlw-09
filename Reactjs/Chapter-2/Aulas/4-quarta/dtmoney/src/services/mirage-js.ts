/* eslint-disable import/no-anonymous-default-export */
import { createServer } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";
      this.get("/transactions", () => {
        return [
          {
            id: 1,
            title: "Transaction",
            amount: 400,
            type: "deposit",
            category: "Casa",
            createAt: new Date("2022-02-14 10:00:00"),
          },
        ];
      });
    },
  });
  return server;
}
