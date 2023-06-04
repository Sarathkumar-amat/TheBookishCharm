import { Routes,Route, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
// import { Landing } from "./pages/Landing";
// import { ProductListing } from "./pages/ProductListing";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductProvider";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/wishList/WishList";
import { Navigation } from "./components/Navigation";
import { SignUp } from "./pages/Auth/SignUp";
import RequiresAuth from "./components/RequiresAuth";
import { Login } from "./pages/Auth/Login";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Landing } from "./pages/Landing/Landing";
import { IndividualProduct } from "./pages/IndividualProduct/IndividualProduct";
import { Loader } from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { Profile } from "./pages/profile/Profile";
import { AuthContext } from "./contexts/AuthProvider";
import { Placeorder } from "./components/Placeorder";

function App() {
  const {bookState, dispatch,loader,setLoader} = useContext(ProductContext);
  const {loginState} = useContext(AuthContext);
  const navigate = useNavigate();
 
  return (
    <div className="App">
    
      <Navigation />
      {loader===true && <Loader />}
        {/* {bookState.searchText!==""&& navigate("/bookListing")} */}
        <ToastContainer autoClose={1000}/>
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/bookListing" element={<ProductListing/>} />
      <Route path="/cart" 
      element={
        <RequiresAuth>
          <Cart/>
      </RequiresAuth>} />
      <Route path="/wishList" element={<RequiresAuth> <WishList /> </RequiresAuth>} />
      <Route path="/mockman" element={<MockAPI/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="signUp" element={<SignUp />}/>
      <Route path="profile" element={<RequiresAuth><Profile/></RequiresAuth>}/>
      <Route path="/bookList/book/:bookId" element={<IndividualProduct />}/>
      <Route path="/checkout" element={<Placeorder />}/>

      </Routes>
    </div>
  );
}

export default App;
