import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"

export function WishList()
{
    const {bookState,dispatch} = useContext(ProductContext);
    return (<div>
        <h1>Wish List Length</h1>
        {bookState.wishListItems?.map(({id,title})=>
        <li>
           Title: {title}
            <button onClick={()=>dispatch({type:"removeFromWishList",payload:id})}>Remove From WishList</button>
        </li>
        )}
    </div>)
}