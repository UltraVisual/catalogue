import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tiles from './Tiles';
import Actions from '../../actions';

const mapStateToProps = state => ({ data: state.catalogue.data });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tiles);