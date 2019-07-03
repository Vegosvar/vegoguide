import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DropdownMenu from 'components/DropdownMenu';
import { changeLanguage } from 'store/modules/App/actions';

const LanguageDropdownMenuContainer = () => {
  const dispatch = useDispatch();
  const onChange = useCallback((...args) => dispatch(changeLanguage(...args)), [
    dispatch
  ]);

  const { t } = useTranslation(['common', 'languages']);

  const options = useSelector(state =>
    state.App.languages.map(({ label, value }) => ({
      label: t(`languages:${label}`),
      value
    }))
  );

  const label = t('common:Language');

  return <DropdownMenu options={options} label={label} onChange={onChange} />;
};

export default LanguageDropdownMenuContainer;
