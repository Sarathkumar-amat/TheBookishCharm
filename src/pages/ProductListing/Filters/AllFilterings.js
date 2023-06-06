import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductProvider"
import "./AllFiltering.css";

export function AllFilterings()
{
    const {bookState,dispatch} = useContext(ProductContext);

    return (<div className="filterings">
        
     <div className="fltrHeader">
            <h3>Filters</h3>
            <p className="clrFltrbtn" 
            onClick={()=>dispatch({type:"clearFilter",payload:"none"})}>Clear</p>
        </div>
        <h4>Price</h4>
        <div className="priceRange">
            <div className="priceCheckPoints">
                <p id="minPrice">1000</p>
                <p id="midPrice">3000</p>
                <p id="maxPrice">5000</p>
            </div>
            <input type="range" min="1000" max="5000" 
            onChange={(event)=>dispatch({type:"priceFilter",payload:event.target.value})} 
            value={bookState.priceRange}/>
        </div>
       
        <h4>Category</h4>
         <ul id="catStyle"> {bookState.categories?.map(category=>
            <li key={category._id} class="individualCat">
                <input class="categoryName" checked={bookState.categoryFilters?.includes(category)} type="checkbox" 
                onChange={()=>dispatch({type:"catFilter",payload:{currentCat:category,page:"listing"}})} />
                <label htmlFor="categoryName">{category}</label>
            </li>)}</ul>
        
        <div className="ratingFilter">
            <h4>Rating</h4>
            <div className="singleRating">
                <input className="rating" type="radio" checked={bookState.stars===1} name="rating" 
                onChange={()=>dispatch({type:"starFilter",payload:1})}/>
                <label htmlFor="rating">1 Star & above</label>
            </div>
            <div className="singleRating">
                <input className="rating" type="radio" name="rating" checked={bookState.stars===2}
                 onChange={()=>dispatch({type:"starFilter",payload:2})}/>
                <label htmlFor="rating">2 Stars & above</label>
            </div>
            <div className="singleRating">
                <input className="rating" readOnly={true} type="radio" name="rating" checked={bookState.stars===3}
                onChange={()=>dispatch({type:"starFilter",payload:3})}/>
                <label htmlFor="rating">3 Stars & above</label>
            </div>
                <div className="singleRating">
                <input className="rating" readOnly={true} type="radio" name="rating" checked={bookState.stars===4}
                onChange={()=>dispatch({type:"starFilter",payload:4})}/>
                <label htmlFor="rating">4 Stars & above</label>
            </div>
        </div>
        <h4>Sort</h4>
        <div id="sortInputs">
            <div class="sortPrice">
                <input type="radio" readOnly={true} checked={bookState.sortType==="asc"} class="sort" name="sortByPrice" 
                onChange={()=>dispatch({type:"sort",payload:"asc"})}/>
                <label htmlFor="sort">low to High</label>
            </div>
            <div class="sortPrice">
                <input type="radio" readOnly={true} checked={bookState.sortType==="dec"} class="sort" name="sortByPrice" 
                onChange={()=>dispatch({type:"sort",payload:"dec"})}/>
                <label htmlFor="sort">High to Low</label>
            </div>
        </div>
       
    </div>)
}