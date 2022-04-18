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
            <td>Desenvolvimento website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Salario</td>
            <td>22/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2.000,00</td>
            <td>Casa</td>
            <td>30/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
