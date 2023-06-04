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
            <div className="header-name">
                <Link id="headerLink" to="/"><h1>TheBookishCharm</h1> </Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="search book name" 
                onChange={(event)=>searchHandler(event)}/>
            </div>
            <div className="various-routes">
                <button className="login-button">Login</button>
                <div onClick={()=>navigate("/wishList")} class="wishList-link">
                    <div>{bookState.wishListItems.length}</div>
                    <i className="material-symbols-outlined">favorite</i>
                </div>
                <div onClick={()=>navigate("/cart")} class="wishList-link">
                    <div>{bookState.cartItems.length}</div>
                    <i className="material-symbols-outlined">shopping_cart</i>
                </div>
                <div onClick={()=>navigate("/profile")} className="wishList-link">
                    profile
                </div>
            </div>
        </nav>
    </div>)
}