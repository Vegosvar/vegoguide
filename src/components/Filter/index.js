import React from 'react';
import { get } from 'lodash';
import { FilterItem } from 'components';
import style from './style.module.scss';

const Filter = ({ options, values, onChange }) => {
  const callback = (value) => {
    if (values.includes(value)) {
      const newValue = values.filter(filtervalue => filtervalue !== value);
      return onChange(newValue);
    }
    return onChange([...values, value]);
  };

  const isSelected = option => values.includes(get(option, 'value', option));
  const filterOptions = options.map((option, index) => (
    <FilterItem
      key={index}
      option={{
        label: option.title,
        value: option._id
      }}
      selected={isSelected(option)}
      callback={callback}
    />
  ));

  return <div className={style.filter}>{filterOptions}</div>;
};

export default Filter;
