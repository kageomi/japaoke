import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { getFurigana } from 'service/api';
import { createRandomMorpheme } from '__factories__';

afterEach(() => {
  mockAxios.reset();
});

describe('getFurigana', () => {
  const query = { text: 'test' };

  test('should access correct endpoint', async () => {
    const { FURIGANA } = API_ENDPOINTS;
    const endpoint = FURIGANA;

    const response = {
      morphemes: [...Array(100)].map(() => createRandomMorpheme()),
    };

    mockAxios.create().post.mockResolvedValue({ data: response });
    const data = await getFurigana(query);

    expect(mockAxios.create().post).toHaveBeenCalledWith(endpoint, {
      ...query,
    });
    expect(data).toEqual(response);
  });

  test('should be error by wrong response. response is empty object', async () => {
    const response = {};

    mockAxios.create().post.mockResolvedValue({ data: response });
    const promise = getFurigana(query);

    expect(mockAxios.create().post).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. response dose not have morphemes', async () => {
    const response = {
      items: [...Array(100)].map(() => createRandomMorpheme()),
    };

    mockAxios.create().post.mockResolvedValue({ data: response });
    const promise = getFurigana(query);

    expect(mockAxios.create().post).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. morphemes does not have enough properties', async () => {
    const response = {
      morphemes: [...Array(100)].map(() => ({})),
    };

    mockAxios.create().post.mockResolvedValue({ data: response });
    const promise = getFurigana(query);

    expect(mockAxios.create().post).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. morphemes have extra property', async () => {
    const response = {
      morphemes: [...Array(100)].map(() => ({
        ...createRandomMorpheme(),
        extra: 'hogehoge',
      })),
    };

    mockAxios.create().post.mockResolvedValue({ data: response });
    const promise = getFurigana(query);

    expect(mockAxios.create().post).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });

  test('should be error by wrong response. morphemes is empty object', async () => {
    const response = {
      morphemes: {},
    };

    mockAxios.create().post.mockResolvedValue({ data: response });
    const promise = getFurigana(query);

    expect(mockAxios.create().post).toHaveBeenCalled();
    expect(promise).rejects.toThrow();
  });
});
