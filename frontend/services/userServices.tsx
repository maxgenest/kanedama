import useSWR from 'swr';
import { fetcher } from './mainServices';

interface IUser {
  name: {
    last: string;
    first: string;
  };
}

interface IReturnType {
  user: IUser;
  userLoading: boolean;
  userError: string;
}

export const useSwrUser = (): IReturnType => {
  const { data, error } = useSWR('https://randomuser.me/api/', fetcher);

  return {
    user: data && data.results[0],
    userLoading: !data && !error,
    userError: error,
  };
};
