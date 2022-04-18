import useSWR from 'swr';
import { fetcher } from './mainServices';

interface ICompany {
  denomination: string;
  etablissement_siege: {
    geo_adresse: string;
    siret: string;
  };
}

interface IReturnType {
  company: ICompany;
  companyLoading: boolean;
  companyError: string;
}

export const useSwrCompany = (): IReturnType => {
  const { data, error } = useSWR(
    'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890',
    fetcher,
  );

  return {
    company: data && data.unite_legale,
    companyLoading: !data && !error,
    companyError: error,
  };
};
