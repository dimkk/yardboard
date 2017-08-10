import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent }  from 'react-simple-dropdown';

import '../../styles/dropdown.less';

const Gerge = ( { title, id, booksList } ) => (
    <tr>
        <td><Link to={ `/gerges/${id}` }>{ title }</Link></td>
        <td>
            <ul>
                {
                    booksList.filter( book => book.gerges.indexOf( id ) != -1 ).map( ( book ) => (
                        <li key={ book.id }><Link to={ `/books/${book.id}` }>{ book.title }</Link></li>
                    ) )
                }
            </ul>
        </td>
    </tr>
)


export default Gerge;