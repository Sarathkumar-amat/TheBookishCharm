import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider"
import { removeFromWishList } from "../../services/WishListServices";
import { WishListCard } from "./components/WishListCard";
import "./WishList.css"

export function WishList()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const token = localStorage.getItem("token");

    return (<div>
        {bookState.wishListItems.length>0 ? <ul>{bookState.wishListItems?.map((book)=>
        <li>
           <WishListCard bookObj={book} cart={bookState?.cartItems} dispatch={dispatch}/>
        </li>
        )}</ul>:
        <div className="wishListMsg">
            <h1>No items in wishList! ☹️</h1>
        </div>}
    </div>)
}