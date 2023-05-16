
   export const initialState = {allBooks:[],
    displayBooks:[],
    categoryFilters: [],
    categories:[]
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

    }
}