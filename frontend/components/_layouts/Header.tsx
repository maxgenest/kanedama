import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Container>
      <Mansa href="/">
        Mansa<MansaPoint>.</MansaPoint>
      </Mansa>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;
const Mansa = styled.a`
  font-family: 'Assistant-SemiBold';
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.blue};
`;
const MansaPoint = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
