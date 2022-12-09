import { API_ENDPOINTS } from 'settings';
import { client } from './client';

const { WAKEUP } = API_ENDPOINTS;

const wakeUpAPIServer = (): void => {
  // wake up glitch API server
  void client.get(WAKEUP);
};

export { wakeUpAPIServer };
