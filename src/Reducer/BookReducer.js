
   export const initialState = {allBooks:[],
    displayBooks:[],
    categoryFilters: [],
    categories:[],
    categoryDetails:[],
    priceRange:5000,
    stars:null,
    sortType:"",
    searchText:"",
    cartItems:[],
    wishListItems:[],
    // address:""
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
            if(state.categoryFilters?.find(element=>element===action.payload.currentCat)){
                if(action.payload.page==="landing")
                {
                   newCat = state.categoryFilters
                }
                else{
                    newCat = state.categoryFilters.filter(value=>value!==action.payload.currentCat)
                }
            }
            else{
                newCat = [...state.categoryFilters,action.payload.currentCat];
            }
            return {...state,categoryFilters:newCat};
        case "starFilter":
            return {...state,stars:action.payload};
        case "sort":
            return {...state,sortType:action.payload};
        case "searchByText":
            return {...state,searchText:action.payload};
        case "clearFilter":
            return {...state,categoryFilters:[],priceRange:5000,stars:null, sortType:"",searchText:""}
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
        // case "setAddress":
        //     return {...state,address:action.payload}
        default:
            console.log("something went wrong")
            return {...state}
                
    }
    
}