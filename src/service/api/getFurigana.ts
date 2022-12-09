import { API_ENDPOINTS } from 'settings';
import { client } from './client';
import { GetFuriganaAPI, GetFuriganaAPIResponse } from './types';

const { FURIGANA } = API_ENDPOINTS;

const getFurigana: GetFuriganaAPI = async ({ text }, options = {}) => {
  return (
    await client.post<GetFuriganaAPIResponse>(FURIGANA, {
      text,
      ...options,
    })
  ).data;
};

export { getFurigana };
