import { connect } from 'react-redux';
import AuthorsView from '../../components/author/authorsView';
import { addAuthor } from '../../actions/authors';

const mapStateToProps = state => (
    { 
        authorsList : state.authorsList,
        booksList : state.booksList 
    }
);
 
const mapDispatchToProps = dispatch => ( {
    onAddAuthor : data => dispatch( addAuthor( data ) )
} );

const authorsView = connect(
    mapStateToProps,
    mapDispatchToProps
)( AuthorsView );

export default authorsView;