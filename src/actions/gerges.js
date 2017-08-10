import { ADD_GERGE, REMOVE_GERGE, EDIT_GERGE } from '../../common/actionTypesClient'

export const addGerge = data => (
    {
        type : ADD_GERGE,
        payload : {
            data : data
        }
    }
)

export const removeGerge = gergeId => (
    {
        type : REMOVE_GERGE,
        payload : gergeId
    }
)

export const editGerge = ( gergeId, data ) => (
    {
        type : EDIT_GERGE,
        payload: {
            gergeId,
            data
        }
    }
)

    