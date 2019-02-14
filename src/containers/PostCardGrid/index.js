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
  allItems: state.Posts.items,
  items: applyFilters(state)
});

const mapDispatchToProps = {
  fetch: fetchPosts
};

const PostCardGridContainer = ({
  allItems,
  error,
  fetch,
  isFetching,
  items,
  t
}) => {
  const [hasFetched, setFetched] = useState(false);

  const fetchItems = () => {
    if (!isFetching) {
      setFetched(true);
      fetch();
    }
  };

  if (!hasFetched && !isFetching) {
    fetchItems();
  }

  if (!hasFetched && isFetching) {
    return <Loading className="mt-2" />;
  }

  if (hasFetched && (!items || items.length === 0)) {
    if (allItems && allItems.length > 0) {
      return (
        <div className="empty mt-2">
          <div className="empty-icon">
            <FontAwesomeIcon size="3x" icon={faTimes} />
          </div>
          <h4 className="empty-title">
            <span>{t('No posts matched the filters')}</span>
          </h4>
          <div className="empty-action">
            <Button onClick={fetchItems}>
              <FontAwesomeIcon icon={faRedo} />
              &nbsp;
              <span>{t('Try again')}</span>
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="empty mt-2">
        <div className="empty-icon">
          <FontAwesomeIcon size="3x" icon={faTimes} />
        </div>
        <h4 className="empty-title">
          <span>{t('Error: No posts returned from server')}</span>
        </h4>
        <div className="empty-action">
          <Button onClick={fetchItems}>
            <FontAwesomeIcon icon={faRedo} />
            &nbsp;
            <span>{t('Try again')}</span>
          </Button>
        </div>
      </div>
    );
  }

  const size = 12; // TODO: Determine the size depending on the device's screen size
  return <PostCardGrid items={items} size={size} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PostCardGridContainer));
