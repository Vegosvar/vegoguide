import React from "react";
import { get, isEqual } from "lodash";
import { FilterItem } from "components";
import style from "./style.module.scss";

const Filter = ({ options, value, setFilterValue }) => {
  const isSelected = option => isEqual(get(option, "value", option), value);

  const filterOptions = options.map((option, index) => (
    <FilterItem
      key={index}
      option={option}
      selected={isSelected(option)}
      callback={setFilterValue}
    />
  ));

  return <div className={style.filter}>{filterOptions}</div>;
};

export default Filter;
