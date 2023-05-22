import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider"
import { CheckOutCard } from "../../components/CheckOutCard";
import "./Cart.css";
import { removeFromCart } from "../../services/CartServices";

export function Cart()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const itemsToDisplay = bookState?.cartItems;

    const handleRemoveFromCrt = (id)=>{
        const token = localStorage.getItem("token");
        console.log(token);
        console.log(id);
        removeFromCart(id,token,dispatch);
    }

    return (<div className="cart-container">
        <ul className="cart-list">{itemsToDisplay?.map(({_id,title,image,qty,price,author,discount})=>
        <li className="cartItem" key={_id}>
            <div className="prod-details">
                <img src={image} height="150px" width="100px" alt={title} />
                <div className="otherDetails">
                    <p id="title">Name: {title}</p>
                    <p id="author">{author}</p>
                    <div id="price-detail">
                        <p id="finalPrice">{price-price*(discount/100)}</p>
                        <p id="orgPrice">{price}</p>
                        <p id="off">({discount}% OFF)</p>
                    </div>
                Quantity
                    <div className="qty-reduce">
                        <button className="add" onClick={()=>dispatch({type:"increaseQuantity",payload:_id})}>+</button>
                        <div id="qty">{qty}</div>
                        <button className="remove" onClick={()=>dispatch({type:"decreaseQuantity",payload:_id})}>-</button>
                    </div>
                </div>
        </div>
        <button onClick={()=>handleRemoveFromCrt(_id)}>Remove from Cart</button>
        
        </li>
        
        )}</ul>
        <CheckOutCard allCartitems={itemsToDisplay} />
        </div>)
}