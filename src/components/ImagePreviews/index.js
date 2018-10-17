import React from 'react';
import classnames from 'classnames';
import propTypes from './prop-types';
import style from './style.module.scss';

const ImagePreviews = ({ className, children, ...props }) => (
  <div className={classnames([style.previews, className])} {...props}>
    {children}
  </div>
);

ImagePreviews.propTypes = propTypes;

export default ImagePreviews;
