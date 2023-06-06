import { useNavigate } from "react-router-dom";
import "./CheckOutCard.css";
export function CheckOutCard({allCartitems})
{
    const navigate = useNavigate();
    const totalPrice = allCartitems.reduce((initVal,{price,qty})=>
    initVal+price*qty,0);
    const discountTotal = allCartitems.reduce((initVal,{price,discount,qty})=>
    initVal+((discount/100)*price)*qty,0);
    return (<div className="checkOutContainer">
        <h3>Price details</h3>
       
        <div id="pricePart">
            <p>Price ({allCartitems.length} items):</p> 
            <p>₹ {totalPrice}</p>
        </div>
        <div id="discountPart">
            <p>Discount:</p>
            <p> - ₹ {discountTotal}</p>
        </div>
        <div id="discountPart">
            <p>Delivery Charges:</p>
            <p> FREE </p>
        </div>
        <div id="final-Price">
            <p>TotalAmount:</p>
            <p>₹ {totalPrice-discountTotal}</p>
        </div>
        
        <p className="discountText">You will save ₹{discountTotal} in this order</p>
        <button className="checkOut" onClick={()=>navigate("/checkout")}>Checkout</button>
    </div>)

}