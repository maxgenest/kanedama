import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useSwrUser = () => {
  const { data, error } = useSWR('https://randomuser.me/api/', fetcher);

  return {
    user: data && data.results[0],
    userLoading: !data && !error,
    userError: error,
  };
};
