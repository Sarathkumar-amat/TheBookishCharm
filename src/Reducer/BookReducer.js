
   export const initialState = {allBooks:[],
    displayBooks:[],
    categoryFilters: [],
    categories:[],
    sortType:"",
    searchText:""
}

export function reducerFunc(state,action){
    switch(action.type){
        case "setBooks":
            return {...state,allBooks:action.payload,displayBooks:action.payload};
        case "setCategory":
            return {...state,categories:action.payload};
        case "catFilter":
            let newCat=[];
            if(state.categoryFilters?.find(element=>element===action.payload)){
                newCat = state.categoryFilters.filter(value=>value!==action.payload)
            }
            else{
                newCat = [...state.categoryFilters,action.payload];
            }
            return {...state,categoryFilters:newCat};
        case "sort":
            return {...state,sortType:action.payload};
        case "searchByText":
            return {...state,searchText:action.payload};

    }
    
}