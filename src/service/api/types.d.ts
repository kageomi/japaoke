import type { Options } from 'ky';

type API<T, V> = (payload: T, options?: Options) => Promise<V>;
type APIResponse<T> = {
  status: 'failed' | 'success';
  payload: T;
};

type SearchSongsAPIResponse = APIResponse<{ songs: Song[] }>;
type SearchSongsAPI = API<{ word: string }, SearchSongsAPIResponse>;

export { SearchSongsAPI };
