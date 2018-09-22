import PropTypes from 'prop-types';

export default {
  address: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
};
