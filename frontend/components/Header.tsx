import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <a href="/">
        <MansaLogo src={'/mansa.webp'} alt="logo Mansa" />
      </a>
    </HeaderContainer>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;
const HeaderContainer = styled.div`
  ${({ theme }) => theme.layouts.container};

  padding-top: ${({ theme }) => theme.spacings.m};
  padding-bottom: ${({ theme }) => theme.spacings.m};
`;
const MansaLogo = styled.img`
  max-width: 100px;
`;
