import { ReactNode } from 'react';

import { Container } from './styles';

interface TransactionTableProps {
  children: ReactNode;
}

function TransactionTable({ children }: TransactionTableProps) {
  return (
    <Container>
      <h1>TransactionTable</h1>
      {children}
    </Container>
  );
};

export default TransactionTable;
