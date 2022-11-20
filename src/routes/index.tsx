import { Artist, Top, Favorite, Song } from 'pages';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from 'components/layout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Top />,
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
        path: 'artist/:artistId',
        element: <Artist />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
    ],
  },
]);

export default router;
