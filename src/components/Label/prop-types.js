import PropTypes from 'prop-types';

export default {
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
};
