
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

    }
}