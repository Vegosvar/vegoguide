import React from 'react';
import { connect } from 'react-redux';
import { Loading, PostCardGrid } from 'components';
import { fetchPosts } from 'store/modules/Posts/actions';
import { applyFilters } from 'store/modules/Posts/filters';

const mapStateToProps = state => ({
  items: applyFilters(state)
});

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
