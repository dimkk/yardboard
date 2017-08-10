import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK, INITIAL_BOOKS } from '../../common/actionTypesServer'

const booksList = ( state = [], action ) => {
    switch( action.type ) {
        case ADD_BOOK:
            return [
                ...state,
                book( {}, action )
            ]
        case REMOVE_BOOK:
            return state.filter( ( b ) => {
                return b.id !== action.payload
            } )
        case EDIT_BOOK:
            return state.map( ( b ) => {
                return b.id === action.payload.bookId && book( b, action ) || b;
            } );
        case INITIAL_BOOKS:
            return action.payload
        default:
            return state    
            
    }
}

const book = ( state = {}, action ) => {
    return {
        ...state,
        ...action.payload.data
    }
}

export default booksList;