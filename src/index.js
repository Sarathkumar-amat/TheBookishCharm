import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContext,ProductProvider } from "./contexts/ProductProvider";
import { CategoryProvider,CategoryContext } from "./contexts/CategoryProvider";

// Call make Server
makeServer();
export {CategoryContext}
export {ProductContext}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
