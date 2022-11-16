import { createBrowserRouter } from "react-router-dom";

// Components
import App from "../App";
import Category from "../views/category";
import Item from "../views/item";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:id",
    element: <Category />,
  },
  {
    path: "/item/:id",
    element: <Item />,
  },
]);
