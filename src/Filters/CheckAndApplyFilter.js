import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export function CheckandApplyFilter(categoryFilterArr)
{
    const {bookState} = useContext(ProductContext);
    let displayValue=bookState.displayBooks;
    const newData = categoryFilterArr?.reduce((initVal,current)=>{
        const booksData = bookState.allBooks?.filter(({categoryName})=>categoryName===current)
        return [...initVal,...booksData]
    },[])
    if(newData?.length>0)
    {
        displayValue=newData;
    }
    return displayValue;
    
}