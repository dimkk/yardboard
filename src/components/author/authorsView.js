import React from 'react';
import autosize from 'autosize';

import AuthorsList from './authorsList';
import AddAuthor from './addAuthor';

class AuthorsView extends React.Component{
    componentDidUpdate() {
		autosize( document.getElementsByTagName('textarea') );
	}

    render(){
    	return(
    		<div>
		        <AddAuthor
		            onAddAuthor = { this.props.onAddAuthor }
		        ></AddAuthor>
		        <AuthorsList
		            authorsList = { this.props.authorsList }
		            booksList = { this.props.booksList }
		        ></AuthorsList>
		    </div>
    	)
    }
}

export default AuthorsView;