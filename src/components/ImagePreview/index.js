import React from 'react';
import { Image } from 'components';
import propTypes from './prop-types';
import style from './style.module.scss';

const ImagePreview = ({ file, index }) => (
    <img alt={file.name} src={file.preview} />
  <div className={style.preview} key={`${file.name}-${index}`} {...props}>
    <Image alt={file.name} src={file.preview} />
  </div>
);

ImagePreview.propTypes = propTypes;

export default ImagePreview;
