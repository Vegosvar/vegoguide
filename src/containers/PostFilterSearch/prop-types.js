import PropTypes from 'prop-types';

export default {
  connectedSetFilterSearch: PropTypes.func.isRequired,
  connectedSetURLQueryParam: PropTypes.func.isRequired,
  value: PropTypes.string,
  location: PropTypes.shape({
    search: PropTypes.string
  })
};
