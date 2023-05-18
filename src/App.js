import { Routes,Route, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
import { Landing } from "./pages/Landing";
import { ProductListing } from "./pages/ProductListing";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductProvider";
import { Cart } from "./pages/Cart";

function App() {
  const {bookState, dispatch} = useContext(ProductContext);
  const navigate = useNavigate();
  const searchHandler = (event)=>{
    dispatch({type:"searchByText",payload:event.target.value});
    navigate("/bookListing");
  }
  return (
    <div className="App">
      <nav>
            <input type="text" placeholder="search book name" 
            onChange={(event)=>searchHandler(event)}/>
        </nav>
        {/* {bookState.searchText!==""&& navigate("/bookListing")} */}
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/bookListing" element={<ProductListing/>} />
      <Route path="/cart" element={<Cart/>} />
        <Route path="/mockman" element={<MockAPI/>}/>
        </Routes>
    </div>
  );
}

export default App;
