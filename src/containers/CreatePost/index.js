import React from 'react';
import { connect } from 'react-redux';
import { PostForm } from 'components';
import { CREATE_POST, UPDATE_POST } from 'store/modules/Posts/constants';
import uuidv4 from 'uuid/v4';

const mapStateToProps = (state, { localId }) => ({
  post: state.Posts.items.find(item => item.localId === localId)
});

const mapDispatchToProps = dispatch => ({
  create: data => dispatch({ type: CREATE_POST, data }),
  update: data => dispatch({ type: UPDATE_POST, data })
});

const PostFormContainer = ({ create, update, post }) => {
  const submit = post ? create : update;

  const postValue = post || {
    localId: uuidv4()
  };

  return <PostForm post={postValue} submit={submit} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormContainer);
