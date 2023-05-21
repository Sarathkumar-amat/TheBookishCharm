import "./CheckOutCard.css";
export function CheckOutCard({allCartitems})
{
    const totalPrice = allCartitems.reduce((initVal,{price,quantity})=>
    initVal+price*quantity,0);
    const discountTotal = allCartitems.reduce((initVal,{price,discount,quantity})=>
    initVal+((discount/100)*price)*quantity,0);
    return (<div className="checkOutContainer">
        <h3>Price details</h3>
        <div id="pricePart">
            <p>Price ({allCartitems.length} items):</p> 
            <p>{totalPrice}</p>
        </div>
        <div id="discountPart">
            <p>Discount:</p>
            <p> {discountTotal}</p>
        </div>
        <div id="final-Price">
            <p>TotalAmount:</p>
            <p>{totalPrice-discountTotal}</p>
        </div>
    </div>)

}