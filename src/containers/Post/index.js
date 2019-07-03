import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/Loading';
import Post from 'components/Post';
import { fetchPosts } from 'store/modules/Posts/actions';
import propTypes from './prop-types';

const PostContainer = ({ url }) => {
  const dispatch = useDispatch();
  const post = useSelector(state =>
    state.Posts.items.find(item => item.url === url)
  );

  useEffect(
    () => {
      dispatch(
        fetchPosts({
          query: {
            url: {
              $in: [url]
            }
          }
        })
      );
    },
    [dispatch, url]
  );

  if (!post) {
    return <Loading height="100%" />;
  }

  return <Post {...post} />;
};

PostContainer.propTypes = propTypes;

export default PostContainer;
