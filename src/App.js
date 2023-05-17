import { Routes,Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
import { Landing } from "./pages/Landing";
import { ProductListing } from "./pages/ProductListing";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductProvider";
import { Cart } from "./pages/Cart";

function App() {
  const {dispatch} = useContext(ProductContext);
  return (
    <div className="App">
      <nav>
            <input type="text" placeholder="search book name" 
            onChange={(event)=>dispatch({type:"searchByText",payload:event.target.value})}/>
        </nav>
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
