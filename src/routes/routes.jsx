import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../pages/Loading';
import Error from '../pages/Error';

// Lazy-loaded
const Home = React.lazy(() => import('../pages/Home'));
const StarShips = React.lazy(() => import('../pages/StarShips'));
const StarShipDetail = React.lazy(() => import('../pages/StarShipDetail'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />
  },
  {
    path: '/starships',
    element: (
      <Suspense fallback={<Loading />}>
        <StarShips />
      </Suspense>
    ),
    errorElement: <Error />
  },
  {
    path: '/starships/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <StarShipDetail />
      </Suspense>
    ),
    errorElement: <Error />
  }
]);
