import React from 'react';
import propTypes from './prop-types';
import style from './style.module.scss';

const ImagePreview = ({ file, index }) => (
  <div className={style.preview} key={`${file.name}-${index}`}>
    <img alt={file.name} src={file.preview} />
  </div>
);

ImagePreview.propTypes = propTypes;

export default ImagePreview;
