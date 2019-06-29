import React from 'react';
import Img from 'react-image';
import Loading from 'components/Loading';
import classnames from 'classnames';
import defaultProps from './default-props';
import propTypes from './prop-types';

const Image = ({
  alt,
  className,
  height,
  fallback,
  src,
  srcSet,
  sizes,
  width,
  ...props
}) => (
  <Img
    alt={alt}
    className={classnames(['img-responsive', 'img-fit-cover', className])}
    src={src}
    src-set={srcSet}
    sizes={sizes}
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
