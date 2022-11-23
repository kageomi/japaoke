import KY from 'ky';
import { toast } from 'react-toastify';
import { SearchSongsAPI, GetSongAPI, GetFuriganaAPI } from './types';

const API_URL = import.meta.env.VITE_API_URL;

const ky = KY.create({
  prefixUrl: API_URL,
  timeout: false,
  retry: {
    limit: 5,
  },
  hooks: {
    afterResponse: [
      (_request, _options, response) => {
        if (!response.ok) {
          toast.error(`Something is wrong: ${response.status}`, {
            hideProgressBar: true,
            autoClose: 10000,
            theme: 'dark',
          });
        }
      },
    ],
  },
});

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  return await ky('song/search', {
    searchParams: { word },
    ...options,
  }).json();
};

const getSong: GetSongAPI = async ({ id }, options = {}) => {
  return await ky('song/get', {
    searchParams: { id },
    ...options,
  }).json();
};

const getFurigana: GetFuriganaAPI = async ({ text }, options = {}) => {
  return await ky
    .post('furigana', {
      json: { text },
      ...options,
    })
    .json();
};

export { searchSongs, getSong, getFurigana };
