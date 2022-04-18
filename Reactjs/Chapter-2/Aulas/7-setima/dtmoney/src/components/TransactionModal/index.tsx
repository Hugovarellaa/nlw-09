import { ReactNode } from 'react';

import { Container } from './styles';

interface TransactionModalProps {
  children: ReactNode;
}

function TransactionModal({ children }: TransactionModalProps) {
  return (
    <Container>
      <h1>TransactionModal</h1>
      {children}
    </Container>
  );
};

export default TransactionModal;
