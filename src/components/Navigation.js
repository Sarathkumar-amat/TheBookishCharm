import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import { useNavigate,Link } from "react-router-dom";
import "./Navigation.css"

export function Navigation()
{
    const navigate = useNavigate();
    const {bookState,dispatch} = useContext(ProductContext);
    const searchHandler = (event)=>{
        dispatch({type:"searchByText",payload:event.target.value});
        navigate("/bookListing");
      }

    return (<div className="whole-nav">
        <nav className="nav-bar">
            <div class="header-name">
                <Link id="headerLink" to="/"><h1>My BookStore</h1> </Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="search book name" 
                onChange={(event)=>searchHandler(event)}/>
            </div>
            <div class="various-routes">
                <button class="login-button">Login</button>
                <div onClick={()=>navigate("/wishList")} class="wishList-link">
                    <div>{bookState.wishListItems.length}</div>
                    <i class="material-symbols-outlined">favorite</i>
                </div>
                <div onClick={()=>navigate("/cart")} class="wishList-link">
                    <div>{bookState.cartItems.length}</div>
                    <i class="material-symbols-outlined">shopping_cart</i>
                </div>
            </div>
        </nav>
    </div>)
}