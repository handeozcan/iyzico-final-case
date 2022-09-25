import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home';
import StarShips from '../pages/StarShips';
import StarShipDetail from '../pages/StarShipDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/starships',
    element: <StarShips />,
    errorElement: <Error />
  },
  {
    path: '/starships/:id',
    element: <StarShipDetail />,
    errorElement: <Error />
  }
]);
