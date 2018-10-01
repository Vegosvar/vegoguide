import React from 'react';
import { connect } from 'react-redux';
import { PostForm } from 'components';
import { mapThunks } from 'store';
import { CREATE_POST } from 'store/modules/Posts/constants';
import uuidv4 from 'uuid/v4';

const mapStateToProps = (state, { localId }) => ({
  post: state.Posts.items.find(item => item.localId === localId)
});

const mapDispatchToProps = mapThunks('Posts', {
  CREATE_POST
});

const PostFormContainer = ({ CREATE_POST, UPDATE_POST, post }) => {
  const submit = post ? UPDATE_POST : CREATE_POST;

  const postValue = post || {
    localId: uuidv4()
  };

  return <PostForm post={postValue} submit={submit} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormContainer);
