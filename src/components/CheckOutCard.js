export function CheckOutCard({allCartitems})
{
    const totalPrice = allCartitems.reduce((initVal,{price,quantity})=>
    initVal+price*quantity,0);
    const discount = 0.25*totalPrice;
    return (<div>
        <h3>Price details</h3>
        <p>Price ({allCartitems.length} items): {totalPrice}</p>
        <p>Discount: {discount}</p>
        <p>TotalAmount: {totalPrice-discount}</p>
    </div>)

}