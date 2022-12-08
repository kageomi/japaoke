import { client } from './client';
import {
  SearchSongsAPI,
  SearchSongsAPIResponse,
  GetSongAPI,
  GetSongAPIResponse,
  GetFuriganaAPI,
  GetFuriganaAPIResponse,
} from './types';

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  return (
    await client.get<SearchSongsAPIResponse>('song/search', {
      params: { word },
      ...options,
    })
  ).data;
};

const getSong: GetSongAPI = async ({ id }, options = {}) => {
  return (
    await client.get<GetSongAPIResponse>('song/get', {
      params: { id },
      ...options,
    })
  ).data;
};

const getFurigana: GetFuriganaAPI = async ({ text }, options = {}) => {
  return (
    await client.post<GetFuriganaAPIResponse>('furigana', {
      text,
      ...options,
    })
  ).data;
};

export { searchSongs, getSong, getFurigana };
