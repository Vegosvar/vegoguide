import React from 'react';
import PostFilterCategories from 'containers/PostFilterCategories';
import PostFilterSearch from 'containers/PostFilterSearch';
import PostCardGrid from 'containers/PostCardGrid';
import Container from 'components/Container';
import Hero from 'components/Hero';
import Page from 'components/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

// TODO Move PostFilterSearch and icon to its own container ocmponent and animate the logo when posts are fetched

const Home = () => {
  const { t } = useTranslation(['common']);

  return [
    <Hero key="hero">
      <div className={style.searchWrapper}>
        <PostFilterSearch
          className={style.search}
          placeholder={t('common:Search')}
        />
        <div className={style.searchIconWrapper}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={style.lead}>
        <span>{t('common:Search vegan restaurants and shops')}</span>
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
};

export default Home;
