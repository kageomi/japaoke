import mockAxios from 'jest-mock-axios';
import { API_ENDPOINTS } from 'settings';
import { wakeUpAPIServer } from 'service/api';

afterEach(() => {
  mockAxios.reset();
});

describe('wakeUpAPIServer', () => {
  test('should access correct endpoint', async () => {
    const { WAKEUP } = API_ENDPOINTS;
    const endpoint = WAKEUP;
    wakeUpAPIServer();
    expect(mockAxios.create().get).toHaveBeenCalledWith(endpoint);
  });
});
