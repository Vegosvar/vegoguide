import PropTypes from 'prop-types';

const ImageSizesPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  original: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  large: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  thumbnail: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
});

export default {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    postcode: PropTypes.number
  }).isRequired,
  cover: ImageSizesPropTypes.isRequired,
  images: PropTypes.arrayOf(ImageSizesPropTypes).isRequired,
  title: PropTypes.string.isRequired
};
