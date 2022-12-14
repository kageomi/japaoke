import { API_ENDPOINTS } from 'settings';
import { is, object, validate, Infer } from 'superstruct';
import { SongRuntimeType } from 'types/Song';
import { client } from './client';
import { API } from './types';

const { SONG_GET } = API_ENDPOINTS;

const APIResponseRuntimeType = object({
  song: SongRuntimeType,
});

type GetSongAPIResponse = Infer<typeof APIResponseRuntimeType>;
type GetSongAPI = API<{ id: string }, GetSongAPIResponse>;

const getSong: GetSongAPI = async ({ id }, options = {}) => {
  const { data } = await client.get<GetSongAPIResponse>(SONG_GET, {
    params: { id },
    ...options,
  });
  if (!is(data, APIResponseRuntimeType)) {
    const [error] = validate(data, APIResponseRuntimeType);
    throw error ?? new Error('API response is invalid');
  }

  return data;
};

export { getSong };
