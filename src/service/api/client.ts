import KY from 'ky';
import { toast } from 'react-toastify';
import { API_URL } from 'settings';

const client = KY.create({
  prefixUrl: API_URL,
  timeout: false,
  retry: {
    limit: 5,
  },
  hooks: {
    afterResponse: [
      (_request, _options, response) => {
        if (!response.ok) {
          toast.error(`Something is wrong: ${response.status}`, {
            hideProgressBar: true,
            autoClose: 10000,
            theme: 'dark',
          });
        }
      },
    ],
  },
});

export { client };
