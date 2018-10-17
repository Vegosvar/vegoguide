import React from 'react';
import Img from 'react-image';
import { Loading } from 'components';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Image = ({ alt, height, fallback, src, width, ...props }) => (
  <Img
    alt={alt}
    className={classnames(['img-responsive', 'img-fit-cover'])}
    src={src}
    unloader={fallback}
    loader={<Loading height={height} />}
    style={{
      height,
      width
    }}
    {...props}
  />
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
