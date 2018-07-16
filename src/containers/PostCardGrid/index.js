import { connect } from 'react-redux';
import { PostCardGrid } from 'components';

const mapStateToProps = state => ({
  items: state.Posts.items
});

export default connect(mapStateToProps)(PostCardGrid);
