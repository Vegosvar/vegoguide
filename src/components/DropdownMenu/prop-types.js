import PropTypes from 'prop-types';

export default {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
