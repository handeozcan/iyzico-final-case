import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
import App from '../App';
import StarShips from '../pages/StarShips';
import StarShipDetail from '../pages/StarShipDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
