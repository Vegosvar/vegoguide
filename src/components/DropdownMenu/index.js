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

  const isSelected = option => {
    const optionValue = get(option, 'value', option);
    return multiple ? value.includes(optionValue) : value === optionValue;
  };

  const menuItems = options.map((option, index) => (
    <DropdownMenuItem
      key={index}
      option={option}
      selected={isSelected(option)}
      onChange={onChangeItem}
    />
  ));

  return (
    <Dropdown right={right} className={className}>
      <DropdownMenuToggle>{label}</DropdownMenuToggle>
      <Menu>{menuItems}</Menu>
    </Dropdown>
  );
};

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;
