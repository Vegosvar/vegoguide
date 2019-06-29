import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Image';
import Label from 'components/Label';
import propTypes from './prop-types';
import defaultProps from './default-props';
import style from './style.module.scss';

const Carousel = ({ active, height, images }) => {
  const inputs = images.map((image, index) => (
    <input
      className="carousel-locator"
      id={`slide-${index}`}
      type="radio"
      name="carousel-radio"
      hidden="hidden"
      defaultChecked={index === active ? 'checked' : undefined}
      key={`${image.src}-${index}`}
    />
  ));

  const items = images.map((image, index) => {
    const prevIndex = index === 0 ? images.length - 1 : index - 1;
    const nextIndex = index !== images.length - 1 ? index + 1 : 0;

    return (
      <figure
        className={classnames([
          'carousel-item',
          active === index ? style.noAnimation : undefined
        ])}
        key={`${image.src}-${index}`}
      >
        {images.length > 1 ? (
          <React.Fragment>
            <Label className="item-prev" htmlFor={`slide-${prevIndex}`}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Label>
            <Label className="item-next" htmlFor={`slide-${nextIndex}`}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Label>
          </React.Fragment>
        ) : (
          ''
        )}
        <Image {...image} width="100%" height={height} />
      </figure>
    );
  });

  const navigation =
    images.length > 1 ? (
      <div className="carousel-nav">
        {images.map((image, index) => (
          <Label
            className="nav-item"
            htmlFor={`slide-${index}`}
            key={`${image.src}-${index}`}
          >
            {index}
          </Label>
        ))}
      </div>
    ) : (
      ''
    );

  return (
    <div className="carousel" style={{ height }}>
      {inputs}
      <div className="carousel-container">{items}</div>
      {navigation}
    </div>
  );
};

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;
