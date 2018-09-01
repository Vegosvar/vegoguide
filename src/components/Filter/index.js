import React from "react";
import { get, isEqual } from "lodash";
import { FilterItem } from "components";
import style from "./style.module.scss";

  const isSelected = option => isEqual(get(option, "value", option), value);
const Filter = ({ options, values, setFilter }) => {
  const callback = value => {
    if (values.includes(value)) {
      const newValue = values.filter(filtervalue => filtervalue !== value);
      return setFilter(newValue);
    } else {
      return setFilter([...values, value]);
    }
  };

  const filterOptions = options.map((option, index) => (
    <FilterItem
      key={index}
      option={option}
      selected={isSelected(option)}
      callback={callback}
    />
  ));

  return <div className={style.filter}>{filterOptions}</div>;
};

export default Filter;
