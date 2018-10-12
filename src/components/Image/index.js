import React from 'react';
import Img from 'react-image';
import { Loading } from 'components';
import defaultProps from './default-props';
import propTypes from './prop-types';
import style from './style.module.scss';

const Image = ({
  alt,
  height,
  fallback,
  src,
  width
}) => (
  <Img
    alt={alt}
    className={style.image}
    src={src}
    unloader={fallback}
    loader={<Loading height={height} />}
    style={{
      height,
      width
    }}
  />
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps

export default Image;
