import { ADD_AUTHOR, REMOVE_AUTHOR, EDIT_AUTHOR } from '../../common/actionTypesClient'

export const addAuthor = data => (
    {
        type : ADD_AUTHOR,
        payload : {
            data : data
        }
    }
)

export const removeAuthor = authorId => (
    {
        type : REMOVE_AUTHOR,
        payload : authorId
    }
)

export const editAuthor = ( authorId, data ) => (
    {
        type : EDIT_AUTHOR,
        payload: {
            authorId,
            data
        }
    }
)

    