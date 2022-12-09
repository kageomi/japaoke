import type { AxiosRequestConfig } from 'axios';
import type { Morpheme } from 'types/Morphology';
import type Song from 'types/Song';
import type SongHeader from 'v/SongHeader';

type API<T, V> = (payload: T, options?: AxiosRequestConfig) => Promise<V>;

type SearchSongsAPIResponse = { songs: SongHeader[] };
type SearchSongsAPI = API<{ word: string }, SearchSongsAPIResponse>;

type GetSongAPIResponse = { song: Song };
type GetSongAPI = API<{ id: string }, GetSongAPIResponse>;

type GetFuriganaAPIResponse = { morphemes: Morpheme[] };
type GetFuriganaAPI = API<{ text: string }, GetFuriganaAPIResponse>;

export {
  SearchSongsAPI,
  SearchSongsAPIResponse,
  GetSongAPI,
  GetSongAPIResponse,
  GetFuriganaAPI,
  GetFuriganaAPIResponse,
};
