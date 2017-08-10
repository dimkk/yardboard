import React from 'react';

const AddBook = ( { gergesList, authorsList, onAddBook } ) => {
    let titleInput;
    let contentsInput;
    let gergesSelect;
    let authorsSelect;

    const addBook = ( e ) =>{
        onAddBook( {
            title : titleInput.value,
            contents : contentsInput.value,
            gerges : getValuesFromSelect( gergesSelect ),
            authors : getValuesFromSelect( authorsSelect )

        } );
        titleInput.value = '';
        contentsInput.value = '';
        cleanSelect( gergesSelect );
        cleanSelect( authorsSelect );
        e.preventDefault();
    }

    const cleanSelect = ( select ) =>
        Array.prototype.forEach.call( select.options, option => { option.selected = false } )

    const getValuesFromSelect = ( select ) =>
        Array.prototype.filter.call( select.options, option => {
            return option.selected;
        } ).map( option => option.value );

    return (
        <form onSubmit={ addBook } className="part">
            <h2>Add book:</h2>
            <div className="form-group">
                <label htmlFor="addBookTitle">Name:</label>
                <input type="text" 
                    ref={ ( input ) => { titleInput = input } } 
                    id="addBookTitle"
                    className="form-control"
                    required></input>
            </div>
            <div className="form-group">
                <label htmlFor="addBookContents">Contents:</label>
                <textarea
                    ref={ ( input ) => { contentsInput = input } }
                    className="form-control"
                    id="addBookContents"
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="addBookGerges">Gerges:</label>
                <select 
                    multiple 
                    ref={ ( select ) => { gergesSelect = select } }
                    className="form-control"
                    id="addBookGerges">
                    {
                        gergesList.map( ( gerge ) => {
                            return(
                                <option value={ gerge.id } key={ gerge.id }>{ gerge.title }</option>
                            )
                        } )
                    }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="addBookAuthors">Authors:</label>
                <select 
                    multiple 
                    ref={ ( select ) => { authorsSelect = select } }
                    className="form-control"
                    id="addBookAuthors">
                    {
                        authorsList.map( ( author ) => {
                            return(
                                <option value={ author.id } key={ author.id }>{ author.name } {author.surname}</option>
                            )
                        } )
                    }
                </select>
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default AddBook;