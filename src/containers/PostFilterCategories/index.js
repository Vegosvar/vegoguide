import { connect } from 'react-redux';
import Filter from 'components/Filter';
import { fetchPosts, setFilterCategories } from 'store/modules/Posts/actions';
import i18n from 'i18n';

const mapStateToProps = state => ({
  options: state.Posts.items
    .reduce(
      (categories, item) => [
        ...categories,
        ...item.categories.filter(category => !categories.includes(category))
      ],
      []
    )
    .map(category => ({
      label: i18n.t(`postCategories:${category.title}`),
      value: category._id
    })),
  value: state.Posts.filter.categories,
  multiple: true
});

const mapDispatchToProps = dispatch => ({
  onChange: (...args) => {
    dispatch(setFilterCategories(...args))
    dispatch(fetchPosts())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
