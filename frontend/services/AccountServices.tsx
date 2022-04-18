import useSWR from 'swr';
import { fetcher } from './mainServices';

export interface IAccount {
  account_id: string;
  account_number: string;
  available: number;
  currency: string;
}

interface IReturnType {
  accounts: IAccount[];
  accountsLoading: boolean;
  accountsError: string;
}

export const useSwrAccounts = (): IReturnType => {
  const { data, error } = useSWR(
    'https://kata.getmansa.tech/accounts',
    fetcher,
  );

  return {
    accounts: data,
    accountsLoading: !data && !error,
    accountsError: error,
  };
};
