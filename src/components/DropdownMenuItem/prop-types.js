import PropTypes from 'prop-types';

export default {
  option: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    value: PropTypes.string.isRequired
  }),
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
