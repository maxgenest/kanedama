import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const Row: React.FC<IProps> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacings.m} 0;

  @media screen and (min-width: ${({theme}) => theme.deviceWidths.mobile}) {
    margin: ${({ theme }) => theme.spacings.l} 0;
  }
`;
const Title = styled.h2`
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;
