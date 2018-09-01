import { connect } from "react-redux";
import { Filter } from "components";
import actions from "store/modules/Posts/actions";

const { SET_FILTER_VALUE } = actions;

const mapDispatchToProps = dispatch => ({
  setFilterValue: value => dispatch(SET_FILTER_VALUE(value))
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
