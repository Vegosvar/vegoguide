import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Input } from 'components';
import { setFilterSearch } from 'store/modules/Posts/actions';
import { setURLQueryParam } from 'store/modules/App/actions';
import queryString from 'query-string';
import propTypes from './prop-types';

// TODO Move parseQuery into a HOC
const parseQuery = (location, property, key) => {
  const parsed = queryString.parse(location[property]);
  return parsed[key];
};

const mapStateToProps = state => ({
  value: state.Posts.filter.search
});

const mapDispatchToProps = {
  connectedSetFilterSearch: setFilterSearch,
  connectedSetURLQueryParam: setURLQueryParam
};

const PostFilterSearch = ({
  connectedSetFilterSearch,
  connectedSetURLQueryParam,
  location,
  value,
  ...props
}) => {
  const [isInitialized, setInitialized] = useState(false);
  const locationSearch = parseQuery(location, 'search', 'search');

  if (
    !isInitialized &&
    locationSearch &&
    locationSearch.length > 0 &&
    locationSearch !== value
  ) {
    connectedSetURLQueryParam({
      key: 'search',
      value: locationSearch
    });

    setInitialized(true);
  }

  const onChange = e => {
    const value = String(e.target.value).trim();

    connectedSetURLQueryParam({
      key: 'search',
      value
    });

    connectedSetFilterSearch(value);
  };

  return (
    <Input {...props} value={value || locationSearch} onChange={onChange} />
  );
};

PostFilterSearch.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostFilterSearch));
