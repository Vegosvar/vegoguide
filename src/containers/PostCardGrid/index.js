import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Button, Loading, PostCardGrid } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchPosts } from 'store/modules/Posts/actions';
import { applyFilters } from 'store/modules/Posts/filters';
import { faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';
import propTypes from './prop-types';

const PostCardGridContainer = ({
  posts,
  fetch,
  isFetching,
  filteredPosts,
  t
}) => {
  const [hasFetched, setFetched] = useState(false);
  const [fetchCalled, setFetchCalled] = useState(false);

  const fetchItems = () => {
    if (!isFetching && !fetchCalled) {
      setFetchCalled(true);

      fetch({
        onFinished: () => {
          setFetched(true);
          setFetchCalled(false);
        }
      });
    }
  };

  if (!hasFetched && !isFetching) {
    fetchItems();
  }

  if (!hasFetched && isFetching) {
    return <Loading className="mt-2" />;
  }

  if (hasFetched && (!filteredPosts || filteredPosts.length === 0)) {
    if (posts && posts.length > 0) {
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
          <span>{t('No posts returned from server')}</span>
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
  return <PostCardGrid items={filteredPosts} size={size} />;
};

PostCardGridContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  isFetching: state.Posts.fetching,
  posts: state.Posts.items,
  filteredPosts: applyFilters(state)
});

const mapDispatchToProps = {
  fetch: fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PostCardGridContainer));
