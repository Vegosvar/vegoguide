import { connect } from "react-redux";
import { PostCardGrid } from "components";

const mapStateToProps = state => {
  const props = {};

  if (state.Posts.filter.categories.length > 0) {
    props.items = state.Posts.items.filter(item =>
      item.categories.some(category =>
        state.Posts.filter.categories.includes(category)
      )
    );
  } else {
    props.items = state.Posts.items;
  }

  return props;
};

export default connect(mapStateToProps)(PostCardGrid);
