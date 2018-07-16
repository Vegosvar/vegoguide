import { connect } from 'react-redux';
import { PageCardGrid } from 'components';

const mapStateToProps = state => ({
  items: state.Pages.items
});

export default connect(mapStateToProps)(PageCardGrid);
