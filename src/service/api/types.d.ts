import type { AxiosRequestConfig } from 'axios';

type API<T, V> = (payload: T, options?: AxiosRequestConfig) => Promise<V>;

export { API };
