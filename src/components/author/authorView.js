import React from 'react';
import autosize from 'autosize';

import Err404 from '../404';

class AuthorView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			readOnly : true
		}

		this.edit = this.edit.bind( this );
		this.remove = this.remove.bind( this );
		this.canselEdit = this.canselEdit.bind( this );
		this.save = this.save.bind( this );
	}

	componentDidMount() {
		if ( this.biographyInput ) autosize( this.biographyInput );
	}

	componentDidUpdate() {
		if ( this.biographyInput ) autosize( this.biographyInput );
	}

	edit(e){
		this.setState ({
			readOnly : false
		});
		e.preventDefault();
	}

	canselEdit(e){
		const author = this.props.author;
		this.setState ({
			readOnly : true
		});
		this.nameInput.value = author.name;
		this.surnameInput.value = author.surname;
		this.biographyInput.value = author.biography || '';
		e.preventDefault();
	}

	remove(e){
		const author = this.props.author;
		this.props.onRemoveAuthor( author.id );
		this.props.history.push( '/authors' );
		e.preventDefault();
	}

	save(e){
		const author = this.props.author;
		this.props.onEditAuthor( author.id, {
			name : this.nameInput.value,
			surname : this.surnameInput.value,
			biography : this.biographyInput.value || ''
		} );
		this.setState ({
			readOnly : true
		});
		e.preventDefault();
	}

	render(){
		const author = this.props.author;
		const readOnly = this.state.readOnly;
		if ( author ) return (
		    <form onSubmit={ this.save }>
		    	<h2>Author { author.name } { author.surname }</h2>
		    	<div className="form-group">
			    	<label htmlFor="authorName">Name:</label>
			    	<input type="text" 
			    		defaultValue={ author.name } 
			    		ref={ ( input ) => { this.nameInput = input } } 
			    		readOnly={ readOnly }
			    		id="authorName"
			    		className="form-control"
			    		required/>
		    	</div>
		    	<div className="form-group">
		    		<label htmlFor="authorSurname">Surame:</label>
		    		<input type="text" 
		    			defaultValue={ author.surname } 
		    			ref={ ( input ) => { this.surnameInput = input } } 
		    			readOnly={ readOnly } 
		    			id="authorSurname"
			    		className="form-control"
		    			required/>
		    	</div>
		    	<div className="form-group">
		    		<label htmlFor="authorBiography">Byography:</label>
		    		<textarea type="text" 
		    			defaultValue={ author.biography } 
		    			ref={ ( input ) => { this.biographyInput = input } } 
		    			readOnly={ readOnly } 
		    			id="authorBiography"
			    		className="form-control"
		    			required/>
		    	</div>
		    	{ readOnly 
		    		? <div>
		    			<button onClick={ this.edit } >Edit</button>
		    			<button onClick={ this.remove } >Remove</button>
		    		</div>
		    		: <div>
		    			<button onClick={ this.canselEdit }>Cancel</button>
		    			<button type="submit">Save</button>
		    		</div> 
		    	}
		    </form>
		)

		return (
			<Err404/>
		)
	}
   
}

export default AuthorView;