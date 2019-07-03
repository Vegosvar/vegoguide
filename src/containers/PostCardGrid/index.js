import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from 'components/Button';
import Card from 'components/Card';
import Loading from 'components/Loading';
import PostCardGrid from 'components/PostCardGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dispatchPromisify } from 'helpers';
import { fetchPosts } from 'store/modules/Posts/actions';
import { applyFilters } from 'store/modules/Posts/filters';
import { faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

const PostCardGridContainer = () => {
  const { t } = useTranslation('common');

  const dispatch = useDispatch();
  const fetch = dispatchPromisify(dispatch, fetchPosts);

  const posts = useSelector(state => state.Posts.items);
  const filter = useSelector(state => state.Posts.filter);
  const filteredPosts = useMemo(() => applyFilters(filter, posts), [
    filter,
    posts
  ]);

  const isFetching = useSelector(state => state.Posts.fetching);
  const columnSize = useSelector(state => state.App.breakpoint.columnSize);

  const filterIsNotEmpty = Object.keys(filter).some(
    key => !isEmpty(filter[key])
  );

  const [hasFetched, setFetched] = useState(false);
  const [fetchCalled, setFetchCalled] = useState(false);

  const fetchItems = useCallback(
    () => {
      if (!isFetching && !fetchCalled) {
        setFetchCalled(true);

        fetch().finally(() => {
          setFetched(true);
          setFetchCalled(false);
        });
      }
    },
    [isFetching, fetchCalled, fetch]
  );

  useEffect(
    () => {
      if (!hasFetched && !isFetching && !fetchCalled) {
        fetchItems();
      }
    },
    [hasFetched, isFetching, fetchCalled, fetchItems]
  );

  if (!hasFetched && isFetching) {
    return <Loading className="mt-2" />;
  }

  if (hasFetched && (!filteredPosts || filteredPosts.length === 0)) {
    if (filterIsNotEmpty) {
      return (
        <Card>
          <div className="empty">
            <div className="empty-icon">
              <FontAwesomeIcon size="3x" icon={faTimes} />
            </div>
            <h4 className="empty-title">
              <span>{t('common:No posts matched the filters')}</span>
            </h4>
            <div className="empty-action">
              <Button onClick={fetchItems}>
                <FontAwesomeIcon icon={faRedo} />
                &nbsp;
                <span>{t('common:Try again')}</span>
              </Button>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card>
        <div className="empty">
          <div className="empty-icon">
            <FontAwesomeIcon size="3x" icon={faTimes} />
          </div>
          <h4 className="empty-title">
            <span>{t('common:No posts returned from server')}</span>
          </h4>
          <div className="empty-action">
            <Button onClick={fetchItems}>
              <FontAwesomeIcon icon={faRedo} />
              &nbsp;
              <span>{t('common:Try again')}</span>
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return <PostCardGrid items={filteredPosts} size={columnSize} />;
};

export default PostCardGridContainer;
