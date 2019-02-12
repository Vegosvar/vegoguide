import React from 'react';
import {
  PostFilterCategories,
  PostFilterSearch,
  PostCardGrid
} from 'containers';
import { Container, Hero, Navbar, Page } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

const Home = ({ t }) => [
  <Navbar key="navbar" />,
  <Hero key="hero">
    <div className={style.searchWrapper}>
      <PostFilterSearch className={style.search} placeholder={t('Sök')} />
      <div className={style.searchIconWrapper}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
    <div className={style.lead}>
      <span>{t('Search vegan restaurants and shops')}</span>
    </div>
    <div className={style.categoriesWrapper}>
      <PostFilterCategories />
    </div>
  </Hero>,
  <Container key="container">
    <Page>
      <PostCardGrid />
    </Page>
  </Container>
];

export default withTranslation()(Home);
