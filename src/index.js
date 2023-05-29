import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContext,ProductProvider } from "./contexts/ProductProvider";
import { CategoryProvider,CategoryContext } from "./contexts/CategoryProvider";
import { AuthProvider,AuthContext } from "./contexts/AuthProvider";

// Call make Server
makeServer();
export {CategoryContext}
export {ProductContext}
export {AuthContext}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
