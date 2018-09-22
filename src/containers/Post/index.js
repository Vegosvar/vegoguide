import { connect } from 'react-redux';
import { Post } from 'components';

const mapStateToProps = (state, { url }) => state.Posts.items.find(item => item.url === url);

export default connect(mapStateToProps)(Post);
