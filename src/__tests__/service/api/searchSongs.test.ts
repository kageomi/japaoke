import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { searchSongs } from 'service/api';
import { createRandomSongHeader } from '__factories__';

afterEach(() => {
  mockAxios.reset();
});

describe('searchSongs', () => {
  const query = { word: 'test' };

  test('should access correct endpoint', async () => {
    const { SONG_SEARCH } = API_ENDPOINTS;
    const endpoint = SONG_SEARCH;

    const response = {
      songs: [...Array(10)].map(() => createRandomSongHeader()),
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const data = await searchSongs(query);

    expect(mockAxios.create().get).toHaveBeenCalledWith(endpoint, {
      params: query,
    });
    expect(data).toEqual(response);
  });

  test('should be error by wrong response. response is empty object', async () => {
    const response = {};

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = searchSongs(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. response dose not have songs', async () => {
    const response = {
      items: [...Array(10)].map(() => createRandomSongHeader()),
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = searchSongs(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. songs have extra property', async () => {
    const response = {
      songs: [...Array(10)].map(() => ({
        ...createRandomSongHeader(),
        extra: 'hogehgoe',
      })),
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = searchSongs(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. songs does not have enough properties', async () => {
    const response = {
      songs: [...Array(10)].map(() => ({ id: 9, title: 'hogehgoe' })),
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = searchSongs(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. songs is array of empty object', async () => {
    const response = {
      songs: [...Array(10)].map(() => ({})),
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = searchSongs(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });
});
