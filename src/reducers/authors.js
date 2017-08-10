import { ADD_AUTHOR, REMOVE_AUTHOR, EDIT_AUTHOR, INITIAL_AUTHORS } from '../../common/actionTypesServer'

const authorsList = ( state = [], action ) => {
    switch( action.type ) {
        case ADD_AUTHOR:
            return [
                ...state,
                author( {}, action )
            ]
        case REMOVE_AUTHOR:
            return state.filter( ( a ) => {
                return a.id !== action.payload
            } )
        case EDIT_AUTHOR:
            return state.map( ( a ) => {
                return a.id === action.payload.authorId && author( a, action ) || a;
            } );
        case INITIAL_AUTHORS:
            return action.payload
        default:
            return state    
            
    }
}

const author = ( state = {}, action ) => {
    return {
        ...state,
        ...action.payload.data
    }
}

export default authorsList;