import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"
import "./AllFiltering.css";

export function AllFilterings()
{
    const {bookState,dispatch} = useContext(ProductContext);

    return (<div className="filterings">
        <h3>Filters</h3>
        <h4>Category</h4>
         <ul id="catStyle"> {bookState.categories?.map(category=>
            <li class="individualCat">
                <input class="categoryName" checked={bookState.categoryFilters?.includes(category)} type="checkbox" 
                onClick={()=>dispatch({type:"catFilter",payload:category})} />
                <label for="categoryName">{category}</label>
            </li>)}</ul>
        <h4>Sort</h4>
        <div id="sortInputs">
            <div class="sortPrice">
                <input type="radio" class="sort" name="sortByPrice" 
                onClick={()=>dispatch({type:"sort",payload:"asc"})}/>
                <label for="sort">low to High</label>
            </div>
            <div class="sortPrice">
                <input type="radio" class="sort" name="sortByPrice" 
                onClick={()=>dispatch({type:"sort",payload:"dec"})}/>
                <label for="sort">High to Low</label>
            </div>
        </div>
    </div>)
}