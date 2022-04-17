import React from "react";
import Summary from "../Summary";
import TransactionTable from "../TransactionTable";

import { Container } from "./styles";

const Dashborad: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};

export default Dashborad;
