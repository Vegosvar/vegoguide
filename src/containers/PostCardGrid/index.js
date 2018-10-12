import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Loading, PostCardGrid } from 'components';
import { fetchPosts } from 'store/modules/Posts/actions';

// TODO: These filters could be moved into the store
const filters = {
  categories: ({ filter, items }) =>
    items.filter(item =>
      item.categories.some(category => filter.includes(category._id))
    ),

  search: ({ filter, items }) =>
    items.filter(item => {
      const regex = new RegExp(filter, 'gim');
      const itemString = JSON.stringify(item);
      return regex.test(itemString);
    })
};

const mapStateToProps = state => ({
  items: Object.keys(state.Posts.filter).reduce((items, key) => {
    const filter = state.Posts.filter[key];
    if (!isEmpty(filter)) {
      return filters[key]({ filter, items });
    }

    return items;
  }, state.Posts.items)
});

const mapDispatchToProps = {
  fetchPosts
};

const PostCardGridContainer = ({ items, fetchPosts }) => {
  if (!items || items.length === 0) {
    fetchPosts();
    return <Loading height="100%" />;
  }

  return <PostCardGrid items={items} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCardGridContainer);
