import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  children: JSX.Element|JSX.Element[];
  className?: string
}

export const Container: React.FC<IProps> = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.s};

  @media screen and (min-width: ${({ theme }) => theme.deviceWidths.mobile}) {
    max-width: 1260px;
    width: 100%;
    margin: auto;
    padding: ${({ theme }) => theme.spacings.m};
  }
`;
