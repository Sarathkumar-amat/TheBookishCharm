import {useContext, useEffect} from "react";
import "./ProductList.css"


import { ProductContext } from "../../contexts/ProductProvider";
import { ApplyCategoryFilter } from "./Filters/FilterMethods/ApplyCategoryFilter";
import { AllFilterings } from "./Filters/AllFilterings";
import { SortByPrice } from "./Filters/FilterMethods/SortbyPrice";
import { SearchFilter } from "./Filters/FilterMethods/SearchFilter";
import { BookCard } from "./components/BookCard";
import { StarFilter } from "./Filters/FilterMethods/StarFilter";
import { PriceFilter } from "./Filters/FilterMethods/PriceFilter";


export function ProductListing()
{
    const {bookState,setLoader} = useContext(ProductContext);

    useEffect(()=>{
        setLoader(()=>true);
        setTimeout(()=>{
            setLoader(()=>false);
        },1000)
    },[])// eslint-disable-line react-hooks/exhaustive-deps
   
    let displayValue = bookState.displayBooks;
    // displayValue = CheckAndApplyFilter(bookState.categoryFilters);
    displayValue = ApplyCategoryFilter(bookState.categoryFilters);
    displayValue = SortByPrice(displayValue);
    displayValue = SearchFilter(displayValue);
    // console.log(displayValue);
    displayValue = StarFilter(displayValue);
    displayValue = PriceFilter(displayValue);
    return (<div>
       
        <div class="booksAndFilters">
            
            <div className="filterBars"><AllFilterings /></div>
            {displayValue.length>0 && <div>
                <h2 className="productPageTitle">List of all products ({displayValue.length} items)</h2>
                <ul id="bookList">{displayValue?.map((book)=>
                <div key={book.id}>
                    <BookCard bookObj={book} />
                </div>
                )}</ul>
            </div> }
            {displayValue.length<=0 && 
                   <div className="NotFoundMsg"> 
                        <h1>Sorry! Entered book not found</h1>
                    </div>
               }
            </div>
            
        </div>)
       
}
