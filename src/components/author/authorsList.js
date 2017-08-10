import React from 'react';

import Author from './author';

const AuthorsList = ( { authorsList, booksList } ) => (
    <div className="part">
        <h2>List of authors:</h2>
        <ul>
            {
                authorsList.map( author =>
                    <Author 
                        key={ author.id }
                        { ...author }
                        booksList = { booksList }
                    ></Author>
                )
            }
        </ul>
    </div>
)

export default AuthorsList;