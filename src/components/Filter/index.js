import React from 'react';
import { get } from 'lodash';
import classnames from 'classnames';
import FilterItem from 'components/FilterItem';
import { Flipper, Flipped } from 'react-flip-toolkit';
import anime from 'animejs';
import style from './style.module.scss';
import propTypes from './prop-types';
import defaultProps from './default-props';

const onElementAppear = (el, index) =>
  anime({
    targets: el,
    opacity: [0, 1],
    delay: index * 20,
    duration: 150,
    easing: 'easeOutSine'
  });

const onElementExit = (el, index, removeElement) =>
  anime({
    targets: el,
    opacity: 0,
    duration: 150,
    complete: removeElement,
    delay: index * 20,
    easing: 'easeOutSine'
  });

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

  const filterOptions = options.map(option => (
    <Flipped
      flipId={option.value}
      onDelayedAppear={onElementAppear}
      onExit={onElementExit}
      key={option.value}
    >
      <FilterItem
        option={option}
        selected={isSelected(option)}
        onChange={onChangeItem}
      />
    </Flipped>
  ));

  return (
    <Flipper
      className={classnames([style.filter, className])}
      flipKey={options.length}
      {...props}
    >
      {filterOptions}
    </Flipper>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
