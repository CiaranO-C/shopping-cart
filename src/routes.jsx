import App from './App.jsx';
import ErrorPage from './ErrorPage';
import HomePage from './home/HomePage';
import ShopPage from './ShopPage';

const routesConfig = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
    },
  ];

  export default routesConfig;