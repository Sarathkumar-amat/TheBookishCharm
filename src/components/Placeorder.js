import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider";
import "./Placeorder.css"

export function Placeorder()
{
    const {bookState} = useContext(ProductContext);
    const orderItems = bookState?.cartItems;
    const totalPrice = orderItems.reduce((initVal,{price,qty})=>
    initVal+price*qty,0);
    const discountTotal = orderItems.reduce((initVal,{price,discount,qty})=>
    initVal+((discount/100)*price)*qty,0);


    return (<div className="placeOrder">
        <div className="orderCard">
            <div id="orderHeading">
                <h2>Order details</h2>
            </div>
            <div className="titles">
                <p>Item</p>
                <p>Quantity</p>
            </div>
           <div className="bookDetail">{ orderItems?.map(({title,qty})=>
            <div className="bookNameqty">
                <p>{title} </p>
                <p>{qty} </p>
           </div>)}</div>
        
            <div className="priceDetails">
                <div id="priceHeading">
                    <h2>Price details</h2>
                </div>
                <div id="pricePart">
                    <p>Price ({orderItems.length} items):</p> 
                    <p>₹ {totalPrice}</p>
                </div>
                <div id="discountPart">
                    <p>Discount:</p>
                    <p> - ₹ {discountTotal}</p>
                </div>
                <div id="final-Price">
                    <p>TotalAmount:</p>
                    <p>₹ {totalPrice-discountTotal}</p>
                </div>
            </div>
            <button>Placeorder</button>
        </div>
        </div>)
}