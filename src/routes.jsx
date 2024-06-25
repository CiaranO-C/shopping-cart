import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import HomePage from "./home/HomePage.jsx";
import ShopPage from "./ShopPage.jsx";
import CartPage from "./CartPage.jsx";
import ProductPage from "./ProductPage.jsx";

const routesConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
      },
      {
        path: 'home',
        element: <HomePage/>,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:id",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routesConfig;
