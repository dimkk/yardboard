import React from 'react';

const AddGerge = ( { onAddGerge } ) => {
    let titleInput;

    const addGerge = ( e ) =>{
        onAddGerge( {
            title : titleInput.value,
        } );
        titleInput.value = '';
        e.preventDefault();
    }

    return (
        <form onSubmit={ addGerge } className="part">
            <h2>Add gerge</h2>
            <div className="form-group">
                <label htmlFor="addGerge">Gerge</label>
                <input type="text" 
                    ref={ ( input ) => { titleInput = input } }
                    id="addGerge"
                    className="form-control"
                    required/>
            </div>
            <button type="submit">Add gerge</button>
        </form>
    )
}

export default AddGerge;