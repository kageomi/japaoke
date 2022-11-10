import KY from 'ky';
import { SearchSongsAPI } from './types';

const API_URL = import.meta.env.VITE_API_URL;

const ky = KY.create({
  prefixUrl: API_URL,
  timeout: false,
  retry: {
    limit: 5,
  },
});

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  return await (
    await ky('song/search', {
      searchParams: { word },
      ...options,
    })
  ).json();
};

export { searchSongs };
