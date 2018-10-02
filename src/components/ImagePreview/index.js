import React from 'react';
import style from './style.module.scss';

const ImagePreview = ({ file, index = 0 }) => (
  <div className={style.preview} key={`${file.name}-${index}`}>
    <img alt={file.name} src={file.preview} />
  </div>
);

export default ImagePreview;
