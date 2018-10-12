import PropTypes from 'prop-types';

export default {
  id: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.string
  ])
};
