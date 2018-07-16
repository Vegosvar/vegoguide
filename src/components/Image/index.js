import React from 'react';
import Img from 'react-image';
import { Loading } from 'components';
import style from './style.module.scss';

const Image = ({
  alt = '',
  height = 'auto',
  fallback,
  src,
  width = 'auto'
}) => {
  return (
    <Img
      className={style.image}
      src={src}
      unloader={fallback}
      style={{
        height,
        width
      }}
      loader={Loading()}
    />
  );
};

export default Image;
