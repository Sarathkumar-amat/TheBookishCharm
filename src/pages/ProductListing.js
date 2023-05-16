import {useContext} from "react";
import "../App.css";

import { ProductContext } from "../contexts/ProductProvider";
import { CategoryContext } from "../contexts/CategoryProvider";


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
    
    return (<div>
        <h1>List of all products</h1>
       <ul> {bookState.categories?.map(category=>
            <li>
                <input type="checkbox" onClick={()=>dispatch({type:"catFilter",payload:category})} />{category}
            </li>)}</ul>
        <ul id="bookList">{displayValue?.map(({title,image,price,categoryName})=>
        <li style={bookStyle}>
            <img height="200px" width="200px" src={image} alt={title}/>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Category: {categoryName}</p>
        </li>
        )}</ul>
    </div>)
}
