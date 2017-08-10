import { connect } from 'react-redux';
import BookView from '../../components/book/bookView';
import { editBook, removeBook } from '../../actions/books';
import getById from '../helpers';

const mapStateToProps = (state, data) => {
    const book = getById( state.booksList, data.match.params.bookId  )
    return {
        book,
        authorsList : state.authorsList,
        gergesList : state.gergesList
    }
}

const mapDispatchToProps = dispatch => ( {
    onEditBook : ( bookId, data ) => dispatch( editBook( bookId, data ) ),
    onRemoveBook : ( bookId ) => dispatch( removeBook( bookId ) )
} );
 
const bookView = connect(
    mapStateToProps,
    mapDispatchToProps
)( BookView );

export default bookView;