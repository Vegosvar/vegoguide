import PropTypes from 'prop-types';
import { propTypes as PostPropTypes } from 'components/Post';

export default {
  fetch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PostPropTypes).isRequired,
  filteredPosts: PropTypes.arrayOf(PostPropTypes).isRequired
};
