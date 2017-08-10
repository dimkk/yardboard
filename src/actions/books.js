import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from '../../common/actionTypesClient'

export const addBook = data => (
    {
        type : ADD_BOOK,
        payload : {
            data : data
        }
    }
)

export const removeBook = bookId => (
    {
        type : REMOVE_BOOK,
        payload : bookId
    }
)

export const editBook = ( bookId, data ) => (
    {
        type : EDIT_BOOK,
        payload: {
            bookId,
            data
        }
    }
)

    