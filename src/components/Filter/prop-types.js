import PropTypes from 'prop-types';

export default {
  options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })
  ),
  values: PropTypes.arrayOf(
    PropTypes.string
  ),
  onChange: PropTypes.func.isRequired
};
