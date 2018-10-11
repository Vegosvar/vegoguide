import PropTypes from 'prop-types';

export default {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    postcode: PropTypes.number
  }).isRequired,
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  label: PropTypes.string.isRequired
};
