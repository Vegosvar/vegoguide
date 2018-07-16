import React from 'react';
import style from './style.module.scss';

const Post = ({ label }) => (
  <div className={style.post}>
    {label}
  </div>
);

export default Post;
