import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const ImagePreview = ({ file, index }) => (
    <img alt={file.name} src={file.preview} />
  <div className={style.preview} key={`${file.name}-${index}`} {...props}>
  </div>
);

ImagePreview.propTypes = propTypes;

export default ImagePreview;
