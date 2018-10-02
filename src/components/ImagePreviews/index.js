import React from 'react';
import style from './style.module.scss';

const ImagePreviews = ({ children }) => (
  <div className={style.previews}>{children}</div>
);

export default ImagePreviews;
