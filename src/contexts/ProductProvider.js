import {createContext,useEffect, useContext} from "react";
import {initialState,reducerFunc} from "../Reducer/BookReducer.js";
import { CategoryContext } from "./CategoryProvider.js";

export const ProductContext = createContext();
export function ProductProvider({children}){
    const {bookState,dispatch} = useContext(CategoryContext);
    // let prods = 2;
    const getDetail = async()=>{
        const res = await fetch("/api/products");
        const responseJson = await res.json();
        const products = responseJson.products;
        dispatch({type:"setBooks",payload:products});
    }
   
    useEffect(()=>{getDetail()},[]);
    // console.log(prods);
    return (<div>
        <ProductContext.Provider value={{bookState,dispatch}}>
            {children}
        </ProductContext.Provider>
    </div>)
}