import React from 'react';
import { connect } from 'react-redux';
import PostForm from 'components/PostForm';
import { createPost, updatePost } from 'store/modules/Posts/actions';
import uuidv4 from 'uuid/v4';

const mapStateToProps = (state, { localId }) => ({
  post: state.Posts.items.find(item => item.localId === localId)
});

const mapDispatchToProps = {
  create: createPost,
  update: updatePost
};

const PostFormContainer = ({ create, update, post }) => {
  const submit = post ? createPost : updatePost;

  const postValue = post || {
    localId: uuidv4()
  };

  return <PostForm post={postValue} submit={submit} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormContainer);
