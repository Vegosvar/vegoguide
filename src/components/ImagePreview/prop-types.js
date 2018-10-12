import PropTypes from 'prop-types';

export default {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number
};
