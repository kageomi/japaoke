import type { Options } from 'ky';

type API<T, V> = (payload: T, options?: Options) => Promise<V>;

type SearchSongsAPIResponse = { songs: Song[] };
type SearchSongsAPI = API<{ word: string }, SearchSongsAPIResponse>;

export { SearchSongsAPI };
