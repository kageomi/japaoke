import { API_ENDPOINTS } from 'settings';
import { client } from './client';
import {
  SearchSongsAPI,
  SearchSongsAPIResponse,
  GetSongAPI,
  GetSongAPIResponse,
  GetFuriganaAPI,
  GetFuriganaAPIResponse,
} from './types';

const { SONG_SEARCH, SONG_GET, FURIGANA } = API_ENDPOINTS;

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  return (
    await client.get<SearchSongsAPIResponse>(SONG_SEARCH, {
      params: { word },
      ...options,
    })
  ).data;
};

const getSong: GetSongAPI = async ({ id }, options = {}) => {
  return (
    await client.get<GetSongAPIResponse>(SONG_GET, {
      params: { id },
      ...options,
    })
  ).data;
};

const getFurigana: GetFuriganaAPI = async ({ text }, options = {}) => {
  return (
    await client.post<GetFuriganaAPIResponse>(FURIGANA, {
      text,
      ...options,
    })
  ).data;
};

export { searchSongs, getSong, getFurigana };
