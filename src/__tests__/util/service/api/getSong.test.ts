import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { getSong } from 'service/api';
import { createRandomSong } from '__factories__';

afterEach(() => {
  mockAxios.reset();
});

describe('getSong', () => {
  test('should access correct endpoint', async () => {
    const { SONG_GET } = API_ENDPOINTS;
    const endpoint = SONG_GET;

    const query = { id: 'test' };
    const response = { song: createRandomSong() };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const data = await getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalledWith(endpoint, {
      params: query,
    });
    expect(data).toEqual(response);
  });
});
