const API_ENDPOINTS = {
  BASE: process.env.VITE_API_URL,
  WAKEUP: 'wakeup',
  SONG_SEARCH: 'song/search',
  SONG_GET: 'song/get',
  FURIGANA: 'furigana',
} as const;
const API_SETTINGS = {
  RETRY_COUNT: 5,
  RETRY_DELAY: 100,
};
const ROUTER_BASENAME = process.env.VITE_ROUTER_BASENAME;
const GENIUS_URL = 'https://docs.genius.com/';
const YAHOO_URL =
  'https://developer.yahoo.co.jp/webapi/jlp/furigana/v2/furigana.html';
const GITHUB_URL = 'https://github.com/kageomi';
const SKELETON_OPTIONS = {
  startColor: 'gray.300',
  endColor: 'gray.100',
  speed: 1,
};

export {
  API_ENDPOINTS,
  API_SETTINGS,
  GENIUS_URL,
  YAHOO_URL,
  GITHUB_URL,
  ROUTER_BASENAME,
  SKELETON_OPTIONS,
};
