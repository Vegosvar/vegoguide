import PropTypes from 'prop-types';

const ImageSizesPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
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
