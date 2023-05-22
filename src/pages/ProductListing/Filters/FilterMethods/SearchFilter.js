import { useContext } from "react";
import { ProductContext } from "../../../../contexts/ProductProvider";


export function SearchFilter(bookArray)
{
    const {bookState} = useContext(ProductContext);

    if(bookState.searchText!=="")
    {
        const newArray = 
        bookArray.filter(({title})=>title.toLowerCase().includes(bookState.searchText.toLowerCase()));
        return newArray;
    }
    return bookArray;
}