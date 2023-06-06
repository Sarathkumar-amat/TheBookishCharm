import {createContext,useEffect, useContext, useState} from "react";
// import {initialState,reducerFunc} from "../Reducer/BookReducer.js";
import { CategoryContext } from "./CategoryProvider.js";

export const ProductContext = createContext();
export function ProductProvider({children}){
    const {bookState,dispatch} = useContext(CategoryContext);
    const [loader,setLoader] = useState(false);
    // let prods = 2;
    const getDetail = async()=>{
        const res = await fetch("/api/products");
        const responseJson = await res.json();
        const products = responseJson.products;
        dispatch({type:"setBooks",payload:products});
    }
   
    useEffect(()=>{
        const getDetail = async()=>{
            const res = await fetch("/api/products");
            const responseJson = await res.json();
            const products = responseJson.products;
            dispatch({type:"setBooks",payload:products});
        }
        getDetail();
    },[]);
    // console.log(prods);
    return (<div>
        <ProductContext.Provider value={{bookState,dispatch,loader,setLoader}}>
            {children}
        </ProductContext.Provider>
    </div>)
}