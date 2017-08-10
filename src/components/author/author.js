import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent }  from 'react-simple-dropdown';

import '../../styles/dropdown.less';

const Author = ( { name, surname, id, booksList } ) => (
    <li>
    	<Dropdown>
            <DropdownTrigger>{ name } { surname }</DropdownTrigger>
            <DropdownContent>
            	<ul>
                    {
                        booksList.filter( book => book.authors.indexOf( id ) != -1 ).map( ( book ) => (
                            <li key={ book.id }><Link to={ `/books/${book.id}` }>{ book.title }</Link></li>
                        ) )
                    }
            		<li><Link to={ `/authors/${id}` }>To author</Link></li>
            	</ul>
           	</DropdownContent>
        </Dropdown>
    	
    </li>
)


export default Author;