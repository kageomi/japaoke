import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { getSong } from 'service/api';
import { createRandomSong } from '__factories__';

afterEach(() => {
  mockAxios.reset();
});

describe('getSong', () => {
  const query = { id: 'test' };

  test('should access correct endpoint', async () => {
    const { SONG_GET } = API_ENDPOINTS;
    const endpoint = SONG_GET;

    const response = { song: createRandomSong() };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const data = await getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalledWith(endpoint, {
      params: query,
    });
    expect(data).toEqual(response);
  });

  test('should be error by wrong response. response is empty object', async () => {
    const response = {};

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. response dose not have song', async () => {
    const response = { item: createRandomSong() };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. song have extra property', async () => {
    const response = { item: { ...createRandomSong(), extra: 'hogehgoe' } };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. song does not have enough properties', async () => {
    const response = {
      song: { id: 9, title: 'hogehgoe' },
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. song is empty object', async () => {
    const response = {
      song: {},
    };

    mockAxios.create().get.mockResolvedValue({ data: response });
    const promise = getSong(query);

    expect(mockAxios.create().get).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });
});
