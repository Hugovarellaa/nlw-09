import React, { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { Container } from "./styles";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createAt: string;
};

const TransactionTable: React.FC = () => {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransaction(response.data.transactions));
  }, []);
  console.log(transaction);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.amount)}
              </td>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(item.createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
