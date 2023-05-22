import { Routes,Route, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
// import { Landing } from "./pages/Landing";
// import { ProductListing } from "./pages/ProductListing";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductProvider";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Navigation } from "./components/Navigation";
import { SignUp } from "./pages/SignUp";
import RequiresAuth from "./components/RequiresAuth";
import { Login } from "./pages/Login";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Landing } from "./pages/Landing/Landing";

function App() {
  const {bookState, dispatch} = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navigation />
        {/* {bookState.searchText!==""&& navigate("/bookListing")} */}
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/bookListing" element={<ProductListing/>} />
      <Route path="/cart" 
      
      element={
        <RequiresAuth>
          <Cart/>
      </RequiresAuth>} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/mockman" element={<MockAPI/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login />}/>

      </Routes>
    </div>
  );
}

export default App;
