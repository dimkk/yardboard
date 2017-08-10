import React from 'react';
import autosize from 'autosize';

import BooksList from './booksList';
import AddBook from './addBook';

class BooksView extends React.Component{
    componentDidUpdate() {
		autosize( document.getElementsByTagName('textarea') );
	}

    render(){
    	return(
    		<div>
		        <AddBook 
		        	onAddBook = { this.props.onAddBook }
		        	authorsList = { this.props.authorsList }
		            gergesList = { this.props.gergesList }/>
		        <BooksList
		            booksList = { this.props.booksList }
		            authorsList = { this.props.authorsList }
		            gergesList = { this.props.gergesList }/>
		    </div>
    	)
    }
}

export default BooksView;