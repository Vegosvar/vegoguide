import { connect } from "react-redux";
import { Filter } from "components";
import actions from "store/modules/Posts/actions";

const { SET_FILTER_CATEGORIES } = actions;

const mapDispatchToProps = dispatch => ({
  setFilter: values => dispatch(SET_FILTER_CATEGORIES(values))
});

const mapStateToProps = state => ({
  options: state.Posts.items.map(item => ({
    label: item.label,
    value: item.id
  })),
  selected: state.Posts.filter.value
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
