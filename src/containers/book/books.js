import { connect } from 'react-redux';
import BooksView from '../../components/book/booksView';
import { addBook } from '../../actions/books';

const mapStateToProps = state => (
    { 
        booksList : state.booksList,
        authorsList : state.authorsList,
        gergesList : state.gergesList
    }
);
 
const mapDispatchToProps = dispatch => ( {
    onAddBook : data => dispatch( addBook( data ) )
} );

const booksView = connect(
    mapStateToProps,
    mapDispatchToProps
)( BooksView );

export default booksView;