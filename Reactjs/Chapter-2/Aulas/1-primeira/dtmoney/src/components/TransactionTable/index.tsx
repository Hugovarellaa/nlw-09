import React, { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

const TransactionTable: React.FC = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
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
            <td className="deposit">R$ 6000</td>
            <td>Dev</td>
            <td>05/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 2000</td>
            <td>Casa</td>
            <td>15/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
