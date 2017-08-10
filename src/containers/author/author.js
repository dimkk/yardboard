import { connect } from 'react-redux';
import AuthorView from '../../components/author/authorView';
import { editAuthor, removeAuthor } from '../../actions/authors';
import getById from '../helpers';

const mapStateToProps = (state, data) => {
    const author = getById( state.authorsList, data.match.params.authorId  );
    return {
        author 
    }
}

const mapDispatchToProps = dispatch => ( {
    onEditAuthor : ( authorId, data ) => dispatch( editAuthor( authorId, data ) ),
    onRemoveAuthor : ( authorId ) => dispatch( removeAuthor( authorId ) )
} );
 
const authorView = connect(
    mapStateToProps,
    mapDispatchToProps
)( AuthorView );

export default authorView;