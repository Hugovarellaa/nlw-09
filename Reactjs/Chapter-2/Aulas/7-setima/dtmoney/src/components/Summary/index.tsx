import { ReactNode } from 'react';

import { Container } from './styles';

interface SummaryProps {
  children: ReactNode;
}

function Summary({ children }: SummaryProps) {
  return (
    <Container>
      <h1>Summary</h1>
      {children}
    </Container>
  );
};

export default Summary;
