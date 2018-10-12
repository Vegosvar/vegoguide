import PropTypes from 'prop-types';

export default {
  option: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }),
    PropTypes.string.isRequired
  ]),
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
