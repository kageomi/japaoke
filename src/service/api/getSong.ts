import { API_ENDPOINTS } from 'settings';
import { client } from './client';
import { GetSongAPI, GetSongAPIResponse } from './types';

const { SONG_GET } = API_ENDPOINTS;

const getSong: GetSongAPI = async ({ id }, options = {}) => {
  return (
    await client.get<GetSongAPIResponse>(SONG_GET, {
      params: { id },
      ...options,
    })
  ).data;
};

export { getSong };
