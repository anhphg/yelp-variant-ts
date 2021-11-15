import './App.css';
import {Navigate, useRoutes} from 'react-router-dom';
import MainLayout from './routes/MainLayout';
import RestaurantLayout from './routes/RestaurantLayout';
import Home from './routes/Home';
import RestaurantListView from './routes/RestaurantListView';
import RestaurantView from './routes/RestaurantDetailView';
import UpdatePage from './routes/UpdatePage';
import PageNotFoundView from './routes/PageNotFoundView';
import RestaurantsContextProvider, { RestaurantsContext }  from "./context/RestaurantsContext";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: '/', element: <Home />},
      {path: 'restaurants', element: <Navigate to='/restaurants/list' />},
      {path: '404', element: <PageNotFoundView />},
    ],
  };
  const restaurantRoutes = {
    path: 'restaurants',
    element: <RestaurantLayout />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: ':id', element: <RestaurantView />},
      {path: ':id/upate', element: <RestaurantView />},
      {path: 'add', element: <UpdatePage />},
      {path: 'list', element: <RestaurantListView />},
    ],
  };

  const routing = useRoutes([mainRoutes,restaurantRoutes]);

  return <RestaurantsContextProvider>{routing}</RestaurantsContextProvider>;
};
export default App;
