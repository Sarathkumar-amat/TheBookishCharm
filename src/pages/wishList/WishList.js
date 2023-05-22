import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider"
import { removeFromWishList } from "../../services/WishListServices";
import { WishListCard } from "./components/WishListCard";

export function WishList()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const token = localStorage.getItem("token");

    return (<div>
        <h1>Wish List Length</h1>
        <ul>{bookState.wishListItems?.map((book)=>
        <li>
           <WishListCard bookObj={book} cart={bookState?.cartItems} dispatch={dispatch}/>
        </li>
        )}</ul>
    </div>)
}