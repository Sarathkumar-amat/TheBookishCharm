import { useContext } from "react";
import { ProductContext } from "../../../../contexts/ProductProvider";


export function StarFilter(bookArray)
{
    const {bookState,dispatch} = useContext(ProductContext);
    if(bookState.stars!==null)
    {
        const newArray = bookArray.filter(({rating})=>rating>=bookState.stars);
        return newArray;
    }
    return bookArray;
}