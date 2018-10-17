import React from 'react';
import { get } from 'lodash';
import classnames from 'classnames';
import { FilterItem } from 'components';
import style from './style.module.scss';
import propTypes from './prop-types';
import defaultProps from './default-props';

const Filter = ({
  className,
  options,
  multiple,
  value,
  onChange,
  ...props
}) => {
  const onChangeItem = newValue => {
    if (multiple) {
      if (value.includes(newValue)) {
        const filteredValue = value.filter(item => item !== newValue);
        return onChange(filteredValue);
      }

      return onChange([...value, newValue]);
    }

    if (value === newValue) {
      return onChange(undefined);
    }

    return onChange(newValue);
  };

  const isSelected = option => {
    const optionValue = get(option, 'value', option);
    return multiple ? value.includes(optionValue) : value === optionValue;
  };

  const filterOptions = options.map((option, index) => (
    <FilterItem
      key={index}
      option={option}
      selected={isSelected(option)}
      onChange={onChangeItem}
    />
  ));

  return (
    <div className={classnames([style.filter, className])} {...props}>
      {filterOptions}
    </div>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
