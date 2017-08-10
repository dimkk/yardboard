import { connect } from 'react-redux';
import GergeView from '../../components/gerge/gergeView';
import { editGerge, removeGerge } from '../../actions/gerges';
import getById from '../helpers';

const mapStateToProps = (state, data) => {
    const gerge = getById( state.gergesList, data.match.params.gergeId  );
    return {
        gerge 
    }
}

const mapDispatchToProps = dispatch => ( {
    onEditGerge : ( gergeId, data ) => dispatch( editGerge( gergeId, data ) ),
    onRemoveGerge : ( gergeId ) => dispatch( removeGerge( gergeId ) )
} );
 
const gergeView = connect(
    mapStateToProps,
    mapDispatchToProps
)( GergeView );

export default gergeView;