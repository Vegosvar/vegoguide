import React from 'react';
import Container from 'components/Container';
import { ReactComponent as Logo } from './logo.svg';
import style from './style.module.scss';

const Hero = ({ children }) => (
  <div className={style.heroWrapper}>
    <Container>
      <div className={style.hero}>
        <Logo />
        {children}
      </div>
    </Container>
  </div>
);

export default Hero;
