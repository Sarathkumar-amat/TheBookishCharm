export function checkCart(cartArray,bookId)
{
    return cartArray.find(({id})=>id===bookId)?true:false;
}
export function checkWishList(wishListArray,bookId)
{
    return wishListArray.find(({id})=>id===bookId)?true:false;
}