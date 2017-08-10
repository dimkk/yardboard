import { ADD_GERGE, REMOVE_GERGE, EDIT_GERGE, INITIAL_GERGES } from '../../common/actionTypesServer'

const gergesList = ( state = [], action ) => {
    switch( action.type ) {
        case ADD_GERGE:
            return [
                ...state,
                gerge( {}, action )
            ]
        case REMOVE_GERGE:
            return state.filter( ( a ) => {
                return a.id !== action.payload
            } )
        case EDIT_GERGE:
            return state.map( ( a ) => {
                return a.id === action.payload.gergeId && gerge( a, action ) || a;
            } );
        case INITIAL_GERGES:
            return action.payload
        default:
            return state    
            
    }
}

const gerge = ( state = {}, action ) => {
    return {
        ...state,
        ...action.payload.data
    }
}

export default gergesList;