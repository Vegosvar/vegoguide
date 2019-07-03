import React from 'react';
import { get } from 'lodash';
import Dropdown from 'components/Dropdown';
import DropdownMenuItem from 'components/DropdownMenuItem';
import DropdownMenuToggle from 'components/DropdownMenuToggle';
import Menu from 'components/Menu';
import propTypes from './prop-types';

const DropdownMenu = ({
  className,
  onChange,
  label,
  options,
  multiple,
  right,
  value
}) => {
  const onChangeItem = newValue => {
    if (multiple) {
      if (value.includes(newValue)) {
        return onChange(value.filter(item => item !== newValue));
      }

      return onChange([...value, newValue]);
    }

    return onChange(newValue);
  };

  const getOptionValue = option => get(option, 'value', option);

  const isSelected = optionValue =>
    multiple ? value.includes(optionValue) : value === optionValue;

  const menuItems = options.map(option => {
    const optionValue = getOptionValue(option);
    return (
      <DropdownMenuItem
        key={optionValue}
        option={option}
        selected={isSelected(optionValue)}
        onClick={onChangeItem}
      />
    );
  });

  return (
    <Dropdown right={right} className={className}>
      <DropdownMenuToggle>{label}</DropdownMenuToggle>
      <Menu>{menuItems}</Menu>
    </Dropdown>
  );
};

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;
