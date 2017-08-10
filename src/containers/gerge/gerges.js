import { connect } from 'react-redux';
import GergesView from '../../components/gerge/gergesView';
import { addGerge } from '../../actions/gerges';

const mapStateToProps = state => (
    { 
        gergesList : state.gergesList,
        booksList : state.booksList 
    }
);
 
const mapDispatchToProps = dispatch => ( {
    onAddGerge : data => dispatch( addGerge( data ) )
} );

const gergesView = connect(
    mapStateToProps,
    mapDispatchToProps
)( GergesView );

export default gergesView;