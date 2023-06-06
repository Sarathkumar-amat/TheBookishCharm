import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider"
// import { removeFromWishList } from "../../services/WishListServices";
import { WishListCard } from "./components/WishListCard";
import "./WishList.css"

export function WishList()
{
    const {bookState,dispatch} = useContext(ProductContext);
    // const token = localStorage.getItem("token");

    return (<div>
        
        {bookState.wishListItems.length>0 ?<div> 
            <h3 className="wishListTitle">My WishList ({bookState.wishListItems.length} items)</h3>
            <ul>{bookState.wishListItems?.map((book)=>
        <li key={book.id}>
           <WishListCard bookObj={book} cart={bookState?.cartItems} dispatch={dispatch}/>
        </li>
        )}</ul></div>:
        <div className="wishListMsg">
            <h1>No items in wishList! ☹️</h1>
        </div>}
    </div>)
}