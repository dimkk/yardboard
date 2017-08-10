import React from 'react';

import Err404 from '../404';

class GergeView extends React.Component {
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

	edit( e ){
		this.setState ({
			readOnly : false
		});
		e.preventDefault();
	}

	canselEdit( e ){
		const gerge = this.props.gerge;
		this.setState ({
			readOnly : true
		});
		this.titleInput.value = gerge.title;
		e.preventDefault();
	}

	remove( e ){
		const gerge = this.props.gerge;
		this.props.onRemoveGerge( gerge.id );
		this.props.history.push( '/gerges' );
		e.preventDefault();
	}

	save( e ){
		const gerge = this.props.gerge;
		this.props.onEditGerge( gerge.id, {
			title: this.titleInput.value
		} );
		this.setState ({
			readOnly : true
		});
		e.preventDefault();
	}

	render(){
		const gerge = this.props.gerge;
		const readOnly = this.state.readOnly;
		if ( gerge ) return (
		    <form onSubmit={ this.save }>
		    	<h2>Gerge</h2>
		    	<div className="form-group">
                	<label htmlFor="gerge">Gerge</label>
		    			<input type="text" 
		    			defaultValue={ gerge.title } 
		    			ref={ ( input ) => { this.titleInput = input } } 
		    			id="gerge"
		    			className="form-control"
		    			readOnly={ readOnly } required/>
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

export default GergeView;