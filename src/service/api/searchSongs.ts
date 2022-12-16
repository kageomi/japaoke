import { API_ENDPOINTS } from 'settings';
import { is, object, array, validate, Infer } from 'superstruct';
import { SongHeaderRuntimeType } from '../../types/SongHeader';
import { client } from './client';
import { API } from './types';

const { SONG_SEARCH } = API_ENDPOINTS;

const APIResponseRuntimeType = object({
  songs: array(SongHeaderRuntimeType),
});

type SearchSongsAPIResponse = Infer<typeof APIResponseRuntimeType>;
type SearchSongsAPI = API<{ word: string }, SearchSongsAPIResponse>;

const searchSongs: SearchSongsAPI = async ({ word }, options = {}) => {
  const { data } = await client.get<SearchSongsAPIResponse>(SONG_SEARCH, {
    params: { word },
    ...options,
  });
  if (!is(data, APIResponseRuntimeType)) {
    const [error] = validate(data, APIResponseRuntimeType);
    throw error ?? new Error('API response is invalid');
  }

  return data;
};

export { searchSongs };
