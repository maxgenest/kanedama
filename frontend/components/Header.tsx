import React from 'react';
import styled from 'styled-components';
import { Container } from './_layouts/Container';

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Container>
      <a href="/">
        <MansaLogo src={'/mansa.webp'} alt="logo Mansa" />
      </a>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;
const MansaLogo = styled.img`
  max-width: 100px;
`;
