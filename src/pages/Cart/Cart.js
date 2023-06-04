import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider"
import { CheckOutCard } from "../../components/CheckOutCard";
import "./Cart.css";
import { removeFromCart, updatedQuantityinCart } from "../../services/CartServices";
import { toast } from "react-toastify";

export function Cart()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const itemsToDisplay = bookState?.cartItems;
    const token = localStorage.getItem("token");

    const handleRemoveFromCrt = (id)=>{
        toast.warning("Book Removed from cart!",{
            position:toast.POSITION_TOP_RIGHT
        })
        removeFromCart(id,token,dispatch);
    }
    const modifyQty = (id,type)=>
    {
        updatedQuantityinCart(id,dispatch,token,type)
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
                        <button className="add" onClick={()=>modifyQty(_id,"+")}>+</button>
                        <div id="qty">{qty}</div>
                        <button disabled={qty<=1} className="remove" onClick={()=>modifyQty(_id,"-")}>-</button>
                    </div>
                </div>
        </div>
        <button onClick={()=>handleRemoveFromCrt(_id)}>Remove from Cart</button>
        
        </li>
        
        )}</ul>
        {itemsToDisplay?.length>0 &&  <CheckOutCard allCartitems={itemsToDisplay} />}
        {itemsToDisplay?.length<=0 && 
        <div className="cartText">
            <h1>No items in Cart! ☹️</h1>
        </div>
        }
        </div>)
}