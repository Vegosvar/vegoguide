import Api from "api";
import { CREATE_POST, UPDATE_POST } from "./constants";

export const fetch = ({ dispatch }, params, settings = {}) =>
  Api.Posts.fetch(params, settings)
    .then(response => response.json())
    .then(({ data: posts }) =>
      posts.forEach(post =>
        dispatch({
          type: CREATE_POST,
          post
        })
      )
    );

export const update = ({ dispatch }, params, settings = {}) =>
  Api.Posts.update(params, settings)
    .then(response => response.json())
    .then(({ data: post }) =>
      dispatch({
        type: UPDATE_POST,
        post
      })
    );
