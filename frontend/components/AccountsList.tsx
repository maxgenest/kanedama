import React from 'react';
import { IAccount, useSwrAccounts } from 'services/AccountServices';
import styled from 'styled-components';
import { AccountItem } from './AccountItem';
import { ErrorContainer } from './_layouts/ErrorContainer';
import { LoadingContainer } from './_layouts/LoadingContainer';
import { Row } from './_layouts/Row';

export const AccountsList: React.FC = () => {
  const { accounts, accountsError, accountsLoading } = useSwrAccounts();

  if (accountsLoading) {
    return <LoadingContainer />;
  }
  if (accountsError) {
    return <ErrorContainer error={accountsError} />;
  }

  return (
    <Row title="Accounts">
      <Grid>
        {accounts.map((account: IAccount) => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </Grid>
    </Row>
  );
};

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s};
  max-width: 675px;

  @media screen and (min-width: ${({ theme }) => theme.deviceWidths.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
