import type { Options } from 'ky';
import type { Morpheme } from 'types/Morphology';
import type Song from 'types/Song';
import type SongHeader from 'v/SongHeader';

type API<T, V> = (payload: T, options?: Options) => Promise<V>;

type SearchSongsAPIResponse = { songs: SongHeader[] };
type SearchSongsAPI = API<{ word: string }, SearchSongsAPIResponse>;

type GetSongAPIResponse = { song: Song };
type GetSongAPI = API<{ id: string }, GetSongAPIResponse>;

type GetFuriganaAPIResponse = { morphemes: Morpheme[] };
type GetFuriganaAPI = API<{ text: string }, GetFuriganaAPIResponse>;

export { SearchSongsAPI, GetSongAPI, GetFuriganaAPI };
