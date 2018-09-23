import { connect } from 'react-redux';
import { Filter } from 'components';
import { mapActions } from 'store';
import { SET_FILTER_CATEGORIES } from 'store/modules/Posts/constants';

const mapDispatchToProps = mapActions('Posts', {
  setFilter: SET_FILTER_CATEGORIES
});

const mapStateToProps = state => ({
  options: state.Posts.items.reduce(
    (categories, item) => [
      ...categories,
      ...item.categories.filter(category => !categories.includes(category))
    ],
    []
  ),
  values: state.Posts.filter.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
