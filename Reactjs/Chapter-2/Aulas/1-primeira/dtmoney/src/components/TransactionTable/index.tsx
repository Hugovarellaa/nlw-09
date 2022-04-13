import React from "react";

import { Container } from "./styles";

const TransactionTable: React.FC = () => {
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
