import React, { useState } from 'react';
import classnames from 'classnames';
import ReactCarousel, { Dots } from '@brainhubeu/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Image';
import propTypes from './prop-types';
import defaultProps from './default-props';
import style from './style.module.scss';
import '@brainhubeu/react-carousel/lib/style.css';

const Carousel = ({ active, images }) => {
  const [carouselIndex, setCarouselIndex] = useState(active);

  const arrowLeft = (
    <div className={classnames(style.arrowWrapper, style.left)}>
      <div className={classnames(style.arrow, style.left)}>
        <FontAwesomeIcon
          className={style.icon}
          fixedWidth
          icon={faChevronLeft}
        />
      </div>
    </div>
  );

  const arrowRight = (
    <div className={classnames(style.arrowWrapper, style.right)}>
      <div className={classnames(style.arrow, style.right)}>
        <FontAwesomeIcon
          className={style.icon}
          fixedWidth
          icon={faChevronRight}
        />
      </div>
    </div>
  );

  return (
    <div className={style.wrapper}>
      <ReactCarousel
        className={style.carousel}
        arrowLeft={arrowLeft}
        arrowRight={arrowRight}
        value={carouselIndex}
        onChange={setCarouselIndex}
        addArrowClickHandler
        infinite
      >
        {images.map((image, index) => (
          <Image key={`${image.src}-${index}`} {...image} />
        ))}
      </ReactCarousel>
      <Dots
        className={style.dots}
        number={images.length}
        value={carouselIndex}
        onChange={setCarouselIndex}
      />
    </div>
  );
};

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;
