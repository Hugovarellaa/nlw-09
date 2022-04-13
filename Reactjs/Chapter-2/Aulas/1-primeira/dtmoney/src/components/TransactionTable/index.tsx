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
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Casa</td>
            <td>20/04/2022</td>
          </tr>

          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">- R$ 70,00</td>
            <td>Comida</td>
            <td>22/04/2022</td>
          </tr>

          <tr>
            <td>Academia</td>
            <td className="withdraw">- R$ 100,00</td>
            <td>Saude</td>
            <td>25/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
