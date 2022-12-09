import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { getFurigana } from 'service/api';
import { createRandomMorpheme } from '__factories__';

afterEach(() => {
  mockAxios.reset();
});

describe('getFurigana', () => {
  test('should access correct endpoint', async () => {
    const { FURIGANA } = API_ENDPOINTS;
    const endpoint = FURIGANA;

    const query = { text: 'test' };
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
});
