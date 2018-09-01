import { connect } from "react-redux";
import { Filter } from "components";
import actions from "store/modules/Posts/actions";

const { SET_FILTER_CATEGORIES } = actions;

const mapDispatchToProps = dispatch => ({
  setFilter: values => dispatch(SET_FILTER_CATEGORIES(values))
});

const mapStateToProps = state => {
  return {
    options: state.Posts.items.reduce(
      (categories, item) => [
        ...categories,
        ...item.categories.filter(category => !categories.includes(category))
      ],
      []
    ),
    values: state.Posts.filter.categories
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
