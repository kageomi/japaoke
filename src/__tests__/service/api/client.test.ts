import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { client } from 'service/api/client';

afterEach(() => {
  mockAxios.reset();
});

describe('client', () => {
  test('should be set baseUrl', async () => {
    const { BASE } = API_ENDPOINTS;
    client;
    expect(mockAxios.create).toHaveBeenCalledWith({ baseUrl: BASE });
  });
});
