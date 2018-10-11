import React from 'react';
import { Carousel } from 'components';
import PropTypes from './prop-types';
import style from './style.module.scss';

const Post = ({
  address: { city, street, postcode },
  cover,
  images,
  label
}) => (
  <div className={style.post}>
    <div className={style.cover}>
      <Carousel
        active={images.findIndex(
          ({ original }) => original._id === cover.original._id
        )}
        height="350px"
        images={images.map(({ title, original }) => ({
          alt: title,
          src: original.url
        }))}
      />
    </div>
    <div className={style.details}>
      <h1 className={style.title}>{label}</h1>
      <address className={style.address}>{(street, postcode, city)}</address>
    </div>
  </div>
);

Post.propTypes = PropTypes;

export default Post;
