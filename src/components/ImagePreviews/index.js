import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const ImagePreviews = ({ children, ...props }) => (
  <div className={style.previews} {...props}>
    {children}
  </div>
);

ImagePreviews.propTypes = propTypes;

export default ImagePreviews;
