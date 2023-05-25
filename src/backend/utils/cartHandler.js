import { addToCart } from "../../services/CartServices";

export const handleAddtoCart = (bookObj,token,dispatch)=>{
    alert("Product added to Cart");
    addToCart(bookObj,token,dispatch);
}
