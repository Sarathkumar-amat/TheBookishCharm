
   export const initialState = {allBooks:[],
    displayBooks:[],
    categoryFilters: [],
    categories:[],
    categoryDetails:[],
    priceRange:3000,
    stars:null,
    sortType:"",
    searchText:"",
    cartItems:[],
    wishListItems:[],
}

export function reducerFunc(state,action){
    switch(action.type){
        case "setBooks":
            return {...state,allBooks:action.payload,displayBooks:action.payload};
        case "setCategory":
            return {...state,categories:action.payload};
        case "setCategoryObject":
            return {...state,categoryDetails:action.payload}
        case "priceFilter":
            return {...state,priceRange:Number(action.payload)}
        case "catFilter":
            let newCat=[];
            if(state.categoryFilters?.find(element=>element===action.payload)){
                newCat = state.categoryFilters.filter(value=>value!==action.payload)
            }
            else{
                newCat = [...state.categoryFilters,action.payload];
            }
            return {...state,categoryFilters:newCat};
        case "starFilter":
            return {...state,stars:action.payload};
        case "sort":
            return {...state,sortType:action.payload};
        case "searchByText":
            return {...state,searchText:action.payload};
        case "clearFilter":
            return {...state,categoryFilters:[],priceRange:3000,stars:null, sortType:"",searchText:""}
        case "addToCart":
            return {...state,cartItems:[...action.payload]};
        case "removeFromCart":
            return {...state,cartItems:[...action.payload]};
        case "increaseQuantity":
            return {...state,cartItems:[...action.payload]};
        case "decreaseQuantity":
            return {...state,cartItems:[...action.payload]};
        case "addToWishList":
            return {...state,wishListItems:[...action.payload]};
        case "removeFromWishList":
            return {...state,wishListItems:[...action.payload]};
        case "log_out":
            return {...state,wishListItems:[],cartItems:[]};
                
    }
    
}