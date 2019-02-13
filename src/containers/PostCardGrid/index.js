import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Button, Loading, PostCardGrid } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchPosts } from 'store/modules/Posts/actions';
import { applyFilters } from 'store/modules/Posts/filters';
import { faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => ({
  isFetching: state.Posts.fetching,
  error: state.Posts.error,
  items: applyFilters(state)
});

const mapDispatchToProps = {
  fetch: fetchPosts
};

const PostCardGridContainer = ({ error, fetch, isFetching, items, t }) => {
  const [hasFetched, setFetched] = useState(false);

  const fetchItems = () => {
    setFetched(true);
    fetch();
  };

  const fetchItemsAgain = () => {
    setFetched(false);
  };

  if (!hasFetched && !isFetching) {
    fetchItems();
  }

  if (isFetching) {
    return <Loading className="mt-2" />;
  }

  if (hasFetched && (!items || items.length === 0)) {
    return (
      <div className="empty mt-2">
        <div className="empty-icon">
          <FontAwesomeIcon size="3x" icon={faTimes} />
        </div>
        <h4 className="empty-title">
          <span>{t('No result')}</span>
        </h4>
        <div>{error}</div>
        <div className="empty-action">
          <Button onClick={fetchItemsAgain}>
            <FontAwesomeIcon icon={faRedo} />
            &nbsp;
            <span>{t('Try again')}</span>
          </Button>
        </div>
      </div>
    );
  }

  return <PostCardGrid items={items} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PostCardGridContainer));
