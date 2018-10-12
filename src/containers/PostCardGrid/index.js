import React from 'react';
import { connect } from 'react-redux';
import { Loading, PostCardGrid } from 'components';
import { fetchPosts } from 'store/modules/Posts/actions';

const mapStateToProps = state => {
  const props = {};

  if (state.Posts.filter.categories.length > 0) {
    props.items = state.Posts.items.filter(item =>
      item.categories.some(category =>
        state.Posts.filter.categories.includes(category._id)
      )
    );
  } else {
    props.items = state.Posts.items;
  }

  return props;
};

const mapDispatchToProps = {
  fetchPosts
};

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
