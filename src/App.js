import { Routes,Route, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
import { Landing } from "./pages/Landing";
import { ProductListing } from "./pages/ProductListing";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductProvider";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Navigation } from "./components/Navigation";

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
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/mockman" element={<MockAPI/>}/>
        </Routes>

    </div>
  );
}

export default App;
