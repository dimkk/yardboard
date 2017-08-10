import { combineReducers } from 'redux';

import authorsList from './authors';
import booksList from './books';
import gergesList from './gerges';

const libraryApp = combineReducers( {
    authorsList,
    booksList,
    gergesList
} );

export default libraryApp;