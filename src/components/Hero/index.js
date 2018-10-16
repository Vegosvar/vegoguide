import React from 'react';
import { PostFilterSearch } from 'containers';
import { Container } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from './logo.svg';
import style from './style.module.scss';

const Hero = () => (
  <div className={style.heroWrapper}>
    <Container>
      <div className={style.hero}>
        <Logo />
        <div className={style.searchWrapper}>
          <PostFilterSearch className={style.search} placeholder="Sök..." />
          <div className={style.searchIconWrapper}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className={style.lead}>
          <span>
            Sök veganska restauranger, butiker, produkter &amp; recept
          </span>
        </div>
      </div>
    </Container>
  </div>
);

export default Hero;
