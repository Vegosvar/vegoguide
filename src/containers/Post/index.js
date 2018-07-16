import { connect } from 'react-redux';
import { Post } from 'components';

const mapStateToProps = state => ({
  items: state.Posts.items
});

export default connect(mapStateToProps)(Post);
