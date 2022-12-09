import { API_ENDPOINTS } from 'settings';
import { client } from './client';
import { SearchSongsAPI, SearchSongsAPIResponse } from './types';

const { SONG_SEARCH } = API_ENDPOINTS;

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  return (
    await client.get<SearchSongsAPIResponse>(SONG_SEARCH, {
      params: { word },
      ...options,
    })
  ).data;
};

export { searchSongs };
