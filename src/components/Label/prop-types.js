import PropTypes from 'prop-types';

export default {
  htmlFor: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.string
  ])
};
