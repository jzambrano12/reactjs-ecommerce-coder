import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyDeHd_OgPMoqZB1J5bkrwW2hrf58bFoi9E",
  authDomain: "ecommerce-para-coderhouse.firebaseapp.com",
  projectId: "ecommerce-para-coderhouse",
  storageBucket: "ecommerce-para-coderhouse.appspot.com",
  messagingSenderId: "667297626621",
  appId: "1:667297626621:web:2b1622c8702ba977ea0194",
};

// Initialize Firebase
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
