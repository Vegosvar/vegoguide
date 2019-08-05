import PropTypes from 'prop-types';

export default {
  cover: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
