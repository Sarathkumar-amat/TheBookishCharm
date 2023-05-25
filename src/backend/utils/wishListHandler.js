import { addToWishList, removeFromWishList } from "../../services/WishListServices";

export const handleAddtoWish = (bookObj,token,dispatch)=>{
    addToWishList(token,dispatch,bookObj);
}
export const handleRemoveFromWish = (bookId,token,dispatch)=>{
    removeFromWishList(bookId,token,dispatch);
}