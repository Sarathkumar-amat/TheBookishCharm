import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"

export function PriceFilter(bookArray)
{
    const {bookState} = useContext(ProductContext);
    return bookArray.filter(({price})=>price<=bookState.priceRange);
}