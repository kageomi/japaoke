import { Top, Song, NotFound } from 'pages';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_BASENAME } from 'settings';
import AppLayout from 'components/layout/AppLayout';
import TopLayout from 'components/layout/TopLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <TopLayout />,
      children: [
        {
          path: '',
          element: <Top />,
        },
      ],
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: 'song/:songId',
          element: <Song />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: ROUTER_BASENAME,
  }
);

export default router;
