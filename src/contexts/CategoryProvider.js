import {createContext,useEffect,useReducer} from "react";
import {initialState,reducerFunc} from "../Reducer/BookReducer.js";

export const CategoryContext = createContext();

export function CategoryProvider( {children} )
{
    const [bookState,dispatch]=useReducer(reducerFunc,initialState);
    
    // console.log(bookState?.categories);
    // console.log(bookState?.sortType);
    // console.log(bookState?.searchText);
    const getCategory = async()=>{
        const res = await fetch("/api/categories");
        const responseJson = await res.json();
        const categories = responseJson?.categories;
        const catNames = categories.map(({categoryName})=>categoryName)
        dispatch({type:"setCategory",payload:catNames});
        dispatch({type:"setCategoryObject",payload:categories});
    }
    useEffect(()=>{ 
        getCategory()},[]) // eslint-disable-line react-hooks/exhaustive-deps
    return (<div>
        <CategoryContext.Provider value={{bookState,dispatch}}>
            {children}
        </CategoryContext.Provider>
    </div>)
}