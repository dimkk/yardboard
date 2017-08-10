import React from 'react';
import autosize from 'autosize';
import { Link } from 'react-router-dom';

import Err404 from '../404';

class BookView extends React.Component {
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

    componentDidMount(){
        autosize( document.getElementsByTagName('textarea') );
    }

    componentDidUpdate() {
        autosize( document.getElementsByTagName('textarea') );
    }

    edit( e ){
        this.setState ({
            readOnly : false
        });
        e.preventDefault();
    }

    canselEdit( e ){
        const book = this.props.book;
        this.setState ({
            readOnly : true
        });
        this.titleInput.value = book.title;
        this.contentsInput.value = book.contents || '';
        e.preventDefault();
    }

    remove( e ){
        const book = this.props.book;
        this.props.onRemoveBook( book.id );
        this.props.history.push( '/books' );
        e.preventDefault();
    }

    save( e ){
        const book = this.props.book;
        const authors = Array.prototype.filter.call( this.authorsSelect.options, ( option ) => {
            return option.selected;
        } ).map( option => option.value );

        const gerges = Array.prototype.filter.call( this.gergesSelect.options, ( option ) => {
            return option.selected;
        } ).map( option => option.value );
        
        this.props.onEditBook( book.id, {
            title : this.titleInput.value,
            contents : this.contentsInput.value,
            authors,
            gerges
        } );
        this.setState ({
            readOnly : true
        });
        e.preventDefault();
    }

    render(){
        const book = this.props.book;
        const authors = this.props.authorsList;
        const gerges = this.props.gergesList;
        const readOnly = this.state.readOnly;
        if ( book ) return (
            <form onSubmit={ this.save }>
                <h2>Book</h2>
                <div className="form-group">
                    <label htmlFor="bookTitle">Title</label>
                    <input type="text" 
                        defaultValue={ book.title } 
                        ref={ ( input ) => { this.titleInput = input } } 
                        id="bookTitle"
                        className="form-control"
                        readOnly={ readOnly } required/>
                </div>
                <div className="form-group">
                    <label htmlFor="bookContents">Contents:</label>
                    <textarea
                        ref={ ( input ) => { this.contentsInput = input } }
                        className="form-control"
                        id="bookContents"
                        defaultValue={ book.contents }
                        readOnly={ readOnly }
                    ></textarea>
                </div>
                { !readOnly 
                    ? <div className="form-group">
                        <label htmlFor="bookAuthors">Authors:</label>
                        <select 
                            multiple 
                            ref={ ( select ) => { this.authorsSelect = select } }
                            id="bookAuthors"
                            className="form-control">
                            {
                                authors.map( ( author ) => {
                                    const selected = book.authors.indexOf( author.id ) !== -1;
                                    return(
                                        <option 
                                            value={ author.id } 
                                            key={ author.id } 
                                            selected={ selected }>{ author.name } { author.surname }</option>
                                    )
                                } )
                            }
                        </select>
                    </div>
                    : <div>
                        <h3>Authors</h3>
                        <ul>
                            {
                                authors.map( author => (
                                    <li key={ author.id }><Link to={`/authors/${ author.id }`}>{ author.name } { author.surname }</Link></li>
                                ) )
                            }
                        </ul>
                    </div>
                }
                { !readOnly 
                    ?<div className="form-group">
                        <label htmlFor="bookGerges">Gerges:</label>
                        <select 
                            multiple 
                            ref={ ( select ) => { this.gergesSelect = select } }
                            className="form-control"
                            id="bookGerges">
                            {
                                gerges.map( ( gerge ) => {
                                    const selected = book.gerges.indexOf( gerge.id ) !== -1;
                                    return(
                                        <option 
                                            value={ gerge.id } 
                                            key={ gerge.id } 
                                            selected={ selected }>{ gerge.title }</option>
                                    )
                                } )
                            }
                        </select>
                    </div>
                    : <div>
                        <h3>Gerges</h3>
                        <ul>
                            {
                                gerges.map( gerge => (
                                    <li key={ gerge.id }><Link to={`/gerges/${ gerge.id }`}>{ gerge.title }</Link></li>
                                ) )
                            }
                        </ul>
                    </div>
                }
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

export default BookView;