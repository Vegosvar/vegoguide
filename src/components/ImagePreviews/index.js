import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const ImagePreviews = ({ children }) => (
  <div className={style.previews}>{children}</div>
);

ImagePreviews.propTypes = propTypes;

export default ImagePreviews;
