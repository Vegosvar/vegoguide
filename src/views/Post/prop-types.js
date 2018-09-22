import PropTypes from 'prop-types';

export default {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }),
};
