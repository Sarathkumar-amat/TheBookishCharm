import {useContext} from "react";
import "../App.css";

import { ProductContext } from "../contexts/ProductProvider";
import { CategoryContext } from "../contexts/CategoryProvider";
import { ApplyCategoryFilter } from "../Filters/ApplyCategoryFilter";
import { AllFilterings } from "./AllFilterings";
import { SortByPrice } from "../Filters/SortbyPrice";
import { SearchFilter } from "../Filters/SearchFilter";


export function ProductListing()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const bookStyle = {
        border:"1px solid black",
        margin:"5px"
    }
    console.log(bookState.displayBooks);
    let displayValue = bookState.displayBooks;
    // displayValue = CheckAndApplyFilter(bookState.categoryFilters);
    displayValue = ApplyCategoryFilter(bookState.categoryFilters);
    displayValue = SortByPrice(displayValue);
    displayValue = SearchFilter(displayValue);
    
    
    return (<div>
        <h1>List of all products</h1>
        <div class="booksAndFilters">
            
        <div class="filterBars"><AllFilterings /></div>
        <ul id="bookList">{displayValue?.map(({title,image,price,categoryName})=>
        <li style={bookStyle}>
            <img height="200px" width="200px" src={image} alt={title}/>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Category: {categoryName}</p>
        </li>
        )}</ul>
        </div>
    </div>)
}
