import { useContext } from "react";
import { ProductContext } from "../../../../contexts/ProductProvider";


export function SortByPrice(bookArray)
{
    const{bookState} = useContext(ProductContext);
    if(bookState.sortType==="asc")
    {
        return [...bookArray].sort((a,b)=>a.price-b.price);
    }
    else if(bookState.sortType==="dec")
    {
        return [...bookArray].sort((a,b)=>b.price-a.price);
    }
    return bookArray;
}