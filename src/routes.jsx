import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import HomePage from "./home/HomePage.jsx";
import ShopPage from "./ShopPage.jsx";
import CartPage from "./CartPage.jsx";

const routesConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routesConfig;
