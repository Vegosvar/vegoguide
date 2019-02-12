import React from 'react';
import { PostFilterCategories, PostFilterSearch } from 'containers';
import { Container } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from 'react-i18next';
import { ReactComponent as Logo } from './logo.svg';
import style from './style.module.scss';

const Hero = ({ t }) => (
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
          <span>{t('Search vegan restaurants and shops')}</span>
        </div>
        <div className={style.categoriesWrapper}>
          <PostFilterCategories />
        </div>
      </div>
    </Container>
  </div>
);

export default withTranslation()(Hero);
