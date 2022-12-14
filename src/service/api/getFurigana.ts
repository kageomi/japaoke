import { API_ENDPOINTS } from 'settings';
import { is, object, array, validate, Infer } from 'superstruct';
import { MorphemeRuntimeType } from 'types/Morphology';
import { client } from './client';
import { API } from './types';

const { FURIGANA } = API_ENDPOINTS;

const APIResponseRuntimeType = object({
  morphemes: array(MorphemeRuntimeType),
});

type GetFuriganaAPIResponse = Infer<typeof APIResponseRuntimeType>;
type GetFuriganaAPI = API<{ text: string }, GetFuriganaAPIResponse>;

const getFurigana: GetFuriganaAPI = async ({ text }, options = {}) => {
  const { data } = await client.post<GetFuriganaAPIResponse>(FURIGANA, {
    text,
    ...options,
  });
  if (!is(data, APIResponseRuntimeType)) {
    const [error] = validate(data, APIResponseRuntimeType);
    throw error ?? new Error('API response is invalid');
  }

  return data;
};

export { getFurigana };
