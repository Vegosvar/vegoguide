import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from 'components/PostForm';
import { createPost, updatePost } from 'store/modules/Posts/actions';
import uuidv4 from 'uuid/v4';
import propTypes from './prop-types';

const PostFormContainer = ({ localId }) => {
  const statePost = useSelector(state =>
    state.Posts.items.find(item => item.localId === localId)
  );

  const dispatch = useDispatch();
  const submitCallback = statePost ? createPost : updatePost;
  const onSubmit = useCallback(() => dispatch(submitCallback), [
    dispatch,
    submitCallback
  ]);

  const post = statePost || {
    localId: uuidv4()
  };

  return <PostForm post={post} submit={onSubmit} />;
};

PostFormContainer.propTypes = propTypes;

export default PostFormContainer;
