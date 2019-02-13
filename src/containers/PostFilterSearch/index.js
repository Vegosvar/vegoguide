import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'connected-react-router';
import { Input } from 'components';
import { setFilterSearch } from 'store/modules/Posts/actions';
import queryString from 'query-string';
import PropTypes from './prop-types';

const parseQuery = (location, property, key) => {
  const parsed = queryString.parse(location[property]);
  return parsed[key];
};

const mapStateToProps = state => ({
  value:
    state.Posts.filter.search ||
    parseQuery(state.router.location, 'search', 'search')
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    const { value = '' } = e.target;

    const search = value ? `?search=${value}` : undefined;
    dispatch(push({ search }));

    dispatch(setFilterSearch(value));
  }
});

// TODO: We need to dispatch the setFilterSearch value when the component is loaded if value is already set

const PostFilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

PostFilterSearch.propTypes = PropTypes;

export default withRouter(PostFilterSearch);
