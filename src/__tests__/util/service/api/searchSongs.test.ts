import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { searchSongs } from 'service/api';
import { createRandomSongHeader } from '__factories__';

afterEach(() => {
  mockAxios.reset();
});

describe('searchSongs', () => {
  test('should access correct endpoint', async () => {
    const { SONG_SEARCH } = API_ENDPOINTS;
    const endpoint = SONG_SEARCH;

    const query = { word: 'test' };
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
});
