import React from 'react';
import { connect } from 'react-redux';
import { Loading, Post } from 'components';
import { fetchPosts } from 'store/modules/Posts/actions';

const mapStateToProps = (state, { url }) => ({
  post: state.Posts.items.find(item => item.url === url)
});

const mapDispatchToProps = {
  fetchPosts
};

const PostContainer = ({ url, post, fetchPosts }) => {
  if (!post) {
    fetchPosts({
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
