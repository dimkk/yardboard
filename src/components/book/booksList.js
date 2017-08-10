import React from 'react';

import Book from './book';

const BooksList = ( { booksList, authorsList, gergesList } ) => (
    <div className="part">
        <h2>Books:</h2>
        <table className="table">
            <thead>
                <tr>
                    <td>Book</td>
                    <td>Authr(s)</td>
                    <td>Gerge(s)</td>
                </tr>
            </thead>
            <tbody>
                {
                    booksList.map( book => {
                        const authors = authorsList || [];
                        const bookAuthors = authors.filter( author => ( book.authors || [] ).indexOf( author.id ) !== -1 );
                        const gerges = gergesList || [];
                        const bookGerges = gerges.filter( gerge => ( book.gerges || [] ).indexOf( gerge.id ) !== -1 )

                        return (
                            <Book 
                                key={ book.id }
                                { ...book }
                                bookAuthors = { bookAuthors }
                                bookGerges = { bookGerges }
                            ></Book>
                        )
                    } )
                }
            </tbody>
        </table>
    </div>
)

export default BooksList;