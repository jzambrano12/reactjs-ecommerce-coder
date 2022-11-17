import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Category from "../views/category";
import Item from "../views/item";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/item/:id",
    element: <Item />,
  },
]);
