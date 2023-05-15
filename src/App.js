import { Routes,Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
import { Landing } from "./pages/Landing";
import { ProductListing } from "./pages/ProductListing";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/bookListing" element={<ProductListing/>} />
        <Route path="/mockman" element={<MockAPI/>}/>
        </Routes>
    </div>
  );
}

export default App;
