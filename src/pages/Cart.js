import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"
import { CheckOutCard } from "../components/CheckOutCard";
import "./Cart.css";

export function Cart()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const itemsToDisplay = bookState?.cartItems;
    return (<div>
        <h1>No of products in cart</h1>
        <ul>{itemsToDisplay?.map(({id,title,image,quantity,price})=>
        <li className="cartItem" key={id}>

            <p>Name: {title}</p>
            <p>Price: {price}
            </p>
        
        <button onClick={()=>dispatch({type:"increaseQuantity",payload:id})}>+</button>Quantity: {quantity}
        <button onClick={()=>dispatch({type:"decreaseQuantity",payload:id})}>-</button>
        <button onClick={()=>dispatch({type:"removeFromCart",payload:id})}>Remove from Cart</button>
        
        </li>
        
        )}</ul>
        <CheckOutCard allCartitems={itemsToDisplay} />
        </div>)
}