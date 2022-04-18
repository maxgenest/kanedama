import React from 'react';
import { IAccount } from 'services/AccountServices';
import styled from 'styled-components';

interface IProps {
  account: IAccount
}

export const AccountItem: React.FC<IProps> = ({ account }) => (
  <Wrapper>
    <BoldFlexRow>
      <p>Account Number:</p>
      <p>{account.account_number}</p>
    </BoldFlexRow>
    <FlexRow>
      <p>Balance:</p>
      <p>{account.available.toLocaleString('en-EN')} {account.currency}</p>
    </FlexRow>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blueLight};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.spacings.xs};
  padding: ${({ theme }) => theme.spacings.ms};
  color: ${({ theme }) => theme.colors.blue};
`;
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
`;
const BoldFlexRow = styled(FlexRow)`
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.xs};
`;
const LastColumn = styled.p`
  text-align: right;
`;
