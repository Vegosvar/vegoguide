import PropTypes from 'prop-types';
import postPropTypes from 'components/Post/prop-types';

export default {
  items: PropTypes.arrayOf(postPropTypes).isRequired
};
