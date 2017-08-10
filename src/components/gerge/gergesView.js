import React from 'react';

import GergesList from './gergesList';
import AddGerge from './addGerge';

const GergesView = ( { gergesList, booksList, onAddGerge } ) => (
    <div>
    	<AddGerge onAddGerge={ onAddGerge }/>
        <GergesList
            gergesList = { gergesList }
            booksList = { booksList }
        ></GergesList>
    </div>
)

export default GergesView;