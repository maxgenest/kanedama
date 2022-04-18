import React from 'react';
import styled from 'styled-components';
import { useSwrCompany } from '../services/companyServices';
import { ErrorContainer } from '@/components/_layouts/ErrorContainer';
import { LoadingContainer } from '@/components/_layouts/LoadingContainer';
import { Row } from './_layouts/Row';

export const Company: React.FC = () => {
  const { company, companyError, companyLoading } = useSwrCompany();

  if (companyLoading) {
    return <LoadingContainer />;
  }
  if (companyError) {
    return <ErrorContainer error={companyError} />;
  }

  return (
    <Row title="Company">
      <Content>Name: {company.denomination}</Content>
      <Content>SIRET: {formatSiret(company.etablissement_siege.siret)}</Content>
      <Address>Address: {company.etablissement_siege.geo_adresse}</Address>
    </Row>
  );
};

const formatSiret = (siret: string) => {
  const numbers = siret.split('');
  numbers.splice(9, 0, ' ');
  return numbers;
};

const Content = styled.p`
  margin-bottom: ${({ theme }) => theme.spacings.s};
`;
const Address = styled(Content)`
  text-transform: uppercase;
`;
