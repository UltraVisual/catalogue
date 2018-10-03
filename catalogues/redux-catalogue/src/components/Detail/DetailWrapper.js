import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';
import Detail from './Detail';

const mapStateToProps = state => ({ data: state.catalogue.singleData });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);