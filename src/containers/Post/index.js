import React from 'react';
import { connect } from 'react-redux';
import { Loading, Post } from 'components';
import { mapActions } from 'store';
import { SET_FILTER_CATEGORIES } from 'store/modules/Posts/constants';

const mapStateToProps = (state, { url }) => ({
  post: state.Posts.items.find(item => item.url === url)
});

const mapDispatchToProps = mapActions('Posts', {
  setFilter: SET_FILTER_CATEGORIES
});

const PostContainer = ({ post, fetchPost }, { url }) => {
  if (!post) {
    fetchPost({
      query: {
        url: {
          $in: [url]
        }
      }
    });

    return <Loading height="100%" />;
  }

  return <Post {...post} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
