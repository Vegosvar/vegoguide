import React from 'react';
import { Image } from 'components';
import style from './style.module.scss';

const Post = ({ address, cover, images, label }) => (
  <div className={style.post}>
    <div className={style.cover}>
      <Image src={cover.original} alt="" height="400px" width="100%" />
    </div>
    <div className={style.details}>
      <h1 className={style.title}>{label}</h1>
      <address className={style.address}>{address}</address>
    </div>
  </div>
);

export default Post;
