import {useContext} from "react";
import "../App.css";
import "./ProductList.css"


import { ProductContext } from "../contexts/ProductProvider";
import { CategoryContext } from "../contexts/CategoryProvider";
import { ApplyCategoryFilter } from "../Filters/ApplyCategoryFilter";
import { AllFilterings } from "./AllFilterings";
import { SortByPrice } from "../Filters/SortbyPrice";
import { SearchFilter } from "../Filters/SearchFilter";
import { BookCard } from "../components/BookCard";
import { StarFilter } from "../Filters/StarFilter";
import { PriceFilter } from "../Filters/PriceFilter";


export function ProductListing()
{
    const {bookState,dispatch} = useContext(ProductContext);
   
    console.log(bookState.displayBooks);
    let displayValue = bookState.displayBooks;
    // displayValue = CheckAndApplyFilter(bookState.categoryFilters);
    displayValue = ApplyCategoryFilter(bookState.categoryFilters);
    displayValue = SortByPrice(displayValue);
    displayValue = SearchFilter(displayValue);
    displayValue = StarFilter(displayValue);
    displayValue = PriceFilter(displayValue);
    return (<div>
       
        <div class="booksAndFilters">
            
            <div class="filterBars"><AllFilterings /></div>
           <div>
                <h2>List of all products</h2>
                <ul id="bookList">{displayValue?.map((book)=>
                <div>
                    <BookCard bookObj={book} />
                </div>
                )}</ul>
            </div>
        </div>
    </div>)
}
