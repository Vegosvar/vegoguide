import React from 'react';
import { PostFilterSearch } from 'containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';
import logo from './logo.svg';

const Hero = () => (
  <div className={style.hero}>
    <div className={style.logo}>
      <img alt="logo" src={logo} />
    </div>
    <div className={style.searchWrapper}>
      <PostFilterSearch className={style.search} placeholder="Sök..." />
      <div className={style.searchIconWrapper}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
    <div className={style.lead}>
      <span>Sök veganska restauranger, butiker, produkter &amp; recept</span>
    </div>
  </div>
);

export default Hero;
