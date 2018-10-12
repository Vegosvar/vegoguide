import PropTypes from 'prop-types';

export default {
  cover: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired,
    thumbnail: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
