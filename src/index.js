import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyCY_ahJeRRr-mWgeNckowIzcEi0MWYHNsM",
  authDomain: "coder-ecommerce-ffb9c.firebaseapp.com",
  projectId: "coder-ecommerce-ffb9c",
  storageBucket: "coder-ecommerce-ffb9c.appspot.com",
  messagingSenderId: "68787096671",
  appId: "1:68787096671:web:ad75cf987100899febdfea",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
