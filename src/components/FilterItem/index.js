import React from "react";
import { get } from "lodash";
import classNames from "classnames";
import style from "./style.module.scss";

const Filter = ({ option, selected, callback }) => {
  const value = get(option, "value", option);
  const label = get(option, "label", option);

  const classes = classNames([
    style.item,
    {
      [style.selected]: selected
    }
  ]);

  return (
    <div className={classes} onClick={callback.bind(this, value)}>
      <div className={style.label}>{label}</div>
    </div>
  );
};

export default Filter;
