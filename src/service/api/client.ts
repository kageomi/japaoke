import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';
import { API_ENDPOINTS, API_SETTINGS } from 'settings';

const BASE_URL = API_ENDPOINTS.BASE;
const { RETRY_COUNT, RETRY_DELAY } = API_SETTINGS;

const client = axios.create({
  baseURL: BASE_URL,
});

axiosRetry(client, { retries: RETRY_COUNT, retryDelay: () => RETRY_DELAY });

client.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.code === 'ERR_CANCELED') {
      return await Promise.reject(error);
    }
    const message = error.response
      ? `${error.response.status} ${error.message}`
      : error.message;
    toast.error(`Something is wrong: ${message}`, {
      hideProgressBar: true,
      autoClose: 10000,
      theme: 'dark',
    });

    return await Promise.reject(error);
  }
);

export { client };
