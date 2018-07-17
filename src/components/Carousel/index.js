import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Image } from 'components';
import style from './style.module.scss';

const Carousel = ({ active = 0, height = 'auto', images = [] }) => {
  const inputs = images.map((image, index) => (
    <input
      className={style.carouselInput}
      id={`slide-${index}`}
      type="radio"
      name="carousel-radio"
      hidden="hidden"
      defaultChecked={index === active ? 'checked' : undefined}
      key={index}
    />
  ));

  const items = images.map((image, index) => {
    const prevIndex = index === 0 ? images.length - 1 : index - 1;
    const nextIndex = index !== images.length - 1 ? index + 1 : 0;

    return (
      <figure
        className={classnames([
          style.carouselItem,
          active === index ? style.noAnimation : undefined
        ])}
        key={index}>
        {images.length > 1 ? (
          <React.Fragment>
            <label className={style.itemPrev} htmlFor={`slide-${prevIndex}`}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </label>
            <label className={style.itemNext} htmlFor={`slide-${nextIndex}`}>
              <FontAwesomeIcon icon={faChevronRight} />
            </label>
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
      <div className={style.carouselNavigation}>
        {images.map((image, index) => (
          <label
            className={style.carouselNavigationItem}
            htmlFor={`slide-${index}`}
            key={index}>
            {index}
          </label>
        ))}
      </div>
    ) : (
      ''
    );
  return (
    <div className={style.carousel} style={{ height }}>
      {inputs}
      <div className={style.carouselContainer}>{items}</div>
      {navigation}
    </div>
  );
};

export default Carousel;
