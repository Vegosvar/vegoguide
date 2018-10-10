import React from 'react';
import { connect } from 'react-redux';
import { Loading, PostCardGrid } from 'components';
import { FETCH_POSTS } from 'store/modules/Posts/constants';

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

const mapDispatchToProps = dispatch => ({
  fetchPosts: data =>
    dispatch({
      type: FETCH_POSTS,
      data
    })
});

const PostCardGridContainer = ({ items, fetchPosts }) => {
  if (!items || items.length === 0) {
    fetchPosts();
    return <Loading height="100%" />;
  }

  return <PostCardGrid items={items} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCardGridContainer);
