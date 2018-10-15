import { connect } from 'react-redux';
import { PostMap } from 'components';
import { applyFilters } from 'store/modules/Posts/filters';

const mapStateToProps = state => ({
  items: applyFilters(state)
});

export default connect(mapStateToProps)(PostMap);
