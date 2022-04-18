import React from 'react';
import { Container } from './Container';

interface IProps {
  error: string;
}

export const ErrorContainer: React.FC<IProps> = ({ error }) => (
  <Container>
    <p>Error: {error}</p>
  </Container>
);

