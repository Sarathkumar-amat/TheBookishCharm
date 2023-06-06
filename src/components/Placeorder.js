import { useContext, useState } from "react"
import { ProductContext } from "../contexts/ProductProvider";
import "./Placeorder.css"
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Placeorder()
{
    const {bookState} = useContext(ProductContext);
    const [deliveryAddress,setDelivery] = useState();
    const navigate = useNavigate();
    const {address} = useContext(AuthContext);
    const orderItems = bookState?.cartItems;
    const totalPrice = orderItems.reduce((initVal,{price,qty})=>
    initVal+price*qty,0);
    const discountTotal = orderItems.reduce((initVal,{price,discount,qty})=>
    initVal+((discount/100)*price)*qty,0);

    const handleAddress = (e,addressObj)=>{
        if(e.target.checked)
        {
            setDelivery(addressObj);
        }
    }
    const doPlaceOrder=()=>{
        if(deliveryAddress===undefined)
        {
            toast.warning("select an address to deliver!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        else{
            toast.success(`Order place successfully and will be delivered to ${deliveryAddress.Name}!`, {
                position: toast.POSITION.TOP_RIGHT
              });
        }
    }
    
    return (<div className="placeOrder">
        <div>
            {address.length<=0 && <div className="noAddress">
                    <div className="noAddressMsg">No address Available</div> 
                    <button className="orderButton" onClick={()=>navigate("/profile")}>Add address in profile page</button>
                </div>}
                {address.length>0 && <div>
                {
                address.map((indiAddress)=>
            
            <div key={indiAddress.id} className="deliveryAddress">
                <input onChange={(event)=>handleAddress(event,indiAddress)} type="radio" name="addressToDeliver"/>
                <div>
                    <div>{indiAddress.Name},</div>
                    <div>{indiAddress.HouseNumber},</div>
                    <div>{indiAddress.Area},</div>
                    <div>{indiAddress.City},</div>
                    <div>PinCode: {indiAddress.PinCode},</div>
                    <div>{indiAddress.State},</div>
                    <div>Phone Number: {indiAddress.Mobile}</div>
                </div>
            </div>)}
            </div>}
        </div>
        <div className="orderCard">
            <div id="orderHeading">
                <h2>Order details</h2>
            </div>
            <div className="titles">
                <p>Item</p>
                <p>Quantity</p>
            </div>
           <div className="bookDetail">{ orderItems?.map(({_id,title,qty})=>
            <div key={_id} className="bookNameqty">
                <p className="bookTitle">{title} </p>
                <p className="bookQty">{qty} </p>
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
            <button onClick={doPlaceOrder} className="orderButton">Place Order</button>
        </div>
        </div>)
}