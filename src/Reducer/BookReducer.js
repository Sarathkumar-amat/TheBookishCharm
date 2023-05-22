
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
            const findItem = state.cartItems.find(({id})=>id===action.payload);
            const updatedItem = {...findItem,quantity:findItem.quantity+1};
            const newCart = state.cartItems.map((item)=>item.id===action.payload?updatedItem:item);
            return {...state,cartItems:newCart};
        case "decreaseQuantity":
            const getItem = state.cartItems.find(({id})=>id===action.payload);
            const updatedQuantity = getItem.quantity>1?getItem.quantity-1:getItem.quantity;
            const decreaseItem = {...getItem,quantity:updatedQuantity};
            const updatedCart = state.cartItems.map((item)=>item.id===action.payload?decreaseItem:item);
            return {...state,cartItems:updatedCart};
        case "addToWishList":
            return {...state,wishListItems:[...state.wishListItems,action.payload]};
        case "removeFromWishList":
            const newWishList = state.wishListItems.filter(({id})=>id!==action.payload);
            return {...state,wishListItems:newWishList};
        
                
    }
    
}