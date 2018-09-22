import React from 'react';
import { Carousel } from 'components';
import style from './style.module.scss';

const Post = ({
  address, cover, images, label,
}) => (
  <div className={style.post}>
    <div className={style.cover}>
      <Carousel
        active={images.findIndex(({ original }) => original === cover.original)}
        height="350px"
        images={images.map(({ title, original }) => ({
          alt: title,
          src: original,
        }))}
      />
    </div>
    <div className={style.details}>
      <h1 className={style.title}>{label}</h1>
      <address className={style.address}>{address}</address>
    </div>
  </div>
);

export default Post;
