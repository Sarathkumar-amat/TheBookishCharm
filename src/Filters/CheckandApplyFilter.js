import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export function CheckAndApplyFilter(filterArr)
{
    const {bookState,dispatch} = useContext(ProductContext);
    let displayValue=bookState.displayBooks;
    // for(let cat of bookState.categoryFilter)
    // {
    //     let booksData = bookState.allBooks?.filter(({categoryName})=>categoryName===cat);
    //     newData=[...newData,booksData];
    // }
    console.log(filterArr);
    const newData = filterArr?.reduce((initVal,current)=>{
        const booksData = bookState.allBooks?.filter(({categoryName})=>categoryName===current)
        return [...initVal,...booksData]
    },[])
    if(newData?.length>0)
    {
        displayValue=newData;
    }
    return displayValue;
    
}