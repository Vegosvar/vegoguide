import { connect } from 'react-redux';
import { Input } from 'components';
import { setFilterSearch } from 'store/modules/Posts/actions';

const mapStateToProps = state => ({
  value: state.Posts.filter.search
});

const mapDispatchToProps = dispatch => ({
  onInput: e => dispatch(setFilterSearch(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
