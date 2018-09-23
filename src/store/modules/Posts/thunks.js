import Api from 'api';
import { CREATE_POST, FETCH_POSTS, UPDATE_POST } from './constants';

export default {
  [FETCH_POSTS]({ dispatch }, params, settings = {}) {
    return Api.Posts.fetch(params, settings)
      .then(response => response.json())
      .then(({ data: posts }) =>
        posts.forEach(post =>
          dispatch({
            type: CREATE_POST,
            post
          })
        )
      );
  },
  [UPDATE_POST]({ dispatch }, params, settings = {}) {
    return Api.Posts.update(params, settings)
      .then(response => response.json())
      .then(({ data: post }) =>
        dispatch({
          type: UPDATE_POST,
          post
        })
      );
  }
};
