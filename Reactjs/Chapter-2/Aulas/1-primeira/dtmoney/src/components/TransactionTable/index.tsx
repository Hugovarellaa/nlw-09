import React, { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { Container } from "./styles";

const TransactionTable: React.FC = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    api.get("/transactions").then((data) => console.log(data));
  }, []);
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit"> R$ 7.000,00</td>
            <td>Salario</td>
            <td>05/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2.000,00</td>
            <td>Casa</td>
            <td>15/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
