import React from 'react';

import Gerge from './gerge';

const GergesList = ( { gergesList, booksList } ) => (
    <div className="part">
        <h2>Gerges</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Gerge</th>
                    <th>Books</th>
                </tr>
            </thead>
            <tbody>
                {
                    gergesList.map( gerge =>
                        <Gerge 
                            key={ gerge.id }
                            { ...gerge }
                            booksList = { booksList }
                        ></Gerge>
                    )
                }
            </tbody>
        </table>
    </div>
)

export default GergesList;