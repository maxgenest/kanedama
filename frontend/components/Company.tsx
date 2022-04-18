import React from 'react';
import styled from 'styled-components';
import { useSwrCompany } from '../services/companyServices';
import { ErrorContainer } from '@/components/_layouts/ErrorContainer';
import { LoadingContainer } from '@/components/_layouts/LoadingContainer';

export const Company: React.FC = () => {
  const { company, companyError, companyLoading } = useSwrCompany();

  if (companyLoading) {
    return <LoadingContainer />;
  }
  if (companyError) {
    return <ErrorContainer error={companyError} />;
  }

  console.log('company', company);

  return (
    <Wrapper>
      <Title>Company</Title>
      <Content>Name: {company.denomination}</Content>
      <Content>SIRET: {formatSiret(company.etablissement_siege.siret)}</Content>
      <Address>Address: {company.etablissement_siege.geo_adresse}</Address>
    </Wrapper>
  );
};

const formatSiret = (siret: string) => {
  const numbers = siret.split('')
  numbers.splice(9, 0, ' ')
  return numbers
}

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacings.l} 0;
`;
const Title = styled.h2`
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;
const Content = styled.p`
  margin-bottom: ${({ theme }) => theme.spacings.s};
`;
const Address = styled(Content)`
  text-transform: uppercase;
`;
