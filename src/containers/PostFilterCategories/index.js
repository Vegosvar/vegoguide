import { connect } from 'react-redux';
import { Filter } from 'components';
import { setFilterCategories } from 'store/modules/Posts/actions';

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

const mapDispatchToProps = {
  onChange: setFilterCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
