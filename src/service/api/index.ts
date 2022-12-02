import { client } from './client';
import { SearchSongsAPI, GetSongAPI, GetFuriganaAPI } from './types';

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  return await client('song/search', {
    searchParams: { word },
    ...options,
  }).json();
};

const getSong: GetSongAPI = async ({ id }, options = {}) => {
  return await client('song/get', {
    searchParams: { id },
    ...options,
  }).json();
};

const getFurigana: GetFuriganaAPI = async ({ text }, options = {}) => {
  return await client
    .post('furigana', {
      json: { text },
      ...options,
    })
    .json();
};

export { searchSongs, getSong, getFurigana };
