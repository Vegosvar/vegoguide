import { connect } from 'react-redux';
import { Input } from 'components';
import { setFilterSearch } from 'store/modules/Posts/actions';
import PropTypes from './prop-types';

const mapStateToProps = state => ({
  value: state.Posts.filter.search
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(setFilterSearch(e.target.value))
});

const PostFilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

PostFilterSearch.propTypes = PropTypes;

export default withRouter(PostFilterSearch);
