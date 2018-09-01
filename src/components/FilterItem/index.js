import React from "react";
import { get } from "lodash";
import style from "./style.module.scss";

const Filter = ({ option, selected, callback }) => {
  const value = get(option, "value", option);
  const label = get(option, "label");

  return (
    <div className={style.item} onClick={() => callback(value)}>
      {label ? <div className={style.label}>{label}</div> : ""}
      <div className={style.value}>{value}</div>
    </div>
  );
};

export default Filter;
