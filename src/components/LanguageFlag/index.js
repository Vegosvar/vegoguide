import React from 'react';
import { ReactComponent as BritishFlag } from 'flag-icon-css/flags/4x3/gb.svg';
import { ReactComponent as SwedishFlag } from 'flag-icon-css/flags/4x3/se.svg';
import propTypes from './prop-types';

const LanguageFlag = ({ code, ...props }) => {
  switch (code) {
    case 'en':
      return <BritishFlag {...props} />;
    case 'sv':
      return <SwedishFlag {...props} />;
    default:
      return <div {...props}>?</div>;
  }
};

LanguageFlag.propTypes = propTypes;

export default LanguageFlag;
