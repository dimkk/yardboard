import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent }  from 'react-simple-dropdown';

import '../../styles/dropdown.less';

const Book = ( { title, id, bookAuthors, bookGerges } ) => {
    let authors = bookAuthors.map( author => <li  key={ author.id }><Link to={`/authors/${ author.id }`}>{ author.name } { author.surname }</Link></li> )
    let gerges = bookGerges.map( gerge => <li  key={ gerge.id }><Link to={`/gerges/${ gerge.id }`}>{ gerge.title }</Link></li> )

    return (
        <tr>
            <td><Link to={`/books/${id}` }>{ title }</Link></td>
            <td>
                {   
                    authors.length 
                        ? <ul>
                            {
                                authors
                            }
                        </ul>
                        : 'Unknown' 
                }
            </td>
            <td>
                {   
                    gerges.length 
                        ? <ul>
                            {
                                gerges
                            }
                        </ul>
                        : 'Unknown' 
                }
            </td>
        </tr>
    )
}


export default Book;