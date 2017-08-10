import React from 'react';

const AddAuthor = ( { onAddAuthor } ) => {
    let nameInput;
    let surnameInput;
    let biographyInput;

    const addAuthor = ( e ) =>{
        onAddAuthor( {
            name : nameInput.value,
            surname : surnameInput.value,
            biography : biographyInput.value
        } );
        nameInput.value = '';
        surnameInput.value = '';
        biographyInput.value = '';
        e.preventDefault();
    }

    return (
        <form onSubmit={ addAuthor } className="part">
            <h2>Add author!!1122123:</h2>
            <div className="form-group">
                <label htmlFor="addAuthorName">Name:</label>
                <input type="text" 
                    ref={ ( input ) => { nameInput = input } } 
                    className="form-control"
                    id="addAuthorName"
                    required></input>
            </div>
            <div className="form-group">
                <label htmlFor="addAuthorSurname">Surname:</label>
                <input type="text" 
                    ref={ ( input ) => { surnameInput = input } }  
                    className="form-control"
                    id="addAuthorSurname"
                    required></input>
            </div>
            <div className="form-group">
                <label htmlFor="addAuthorbiography">Biography:</label>
                <textarea
                    ref={ ( input ) => { biographyInput = input } }  
                    className="form-control"
                    id="addAuthorbiography"
                    required/>
            </div>
            <button type="submit">Add author</button>
        </form>
    )
}

export default AddAuthor;