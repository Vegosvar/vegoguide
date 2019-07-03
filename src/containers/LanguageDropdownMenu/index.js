import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'store/modules/App/actions';
import DropdownMenu from 'components/DropdownMenu';
import LanguageFlag from 'components/LanguageFlag';
import style from './style.module.scss';

const LanguageDropdownMenuContainer = () => {
  const dispatch = useDispatch();
  const onChange = useCallback((...args) => dispatch(changeLanguage(...args)), [
    dispatch
  ]);

  const { t } = useTranslation(['common', 'languages']);

  const options = useSelector(state =>
    state.App.languages.map(({ label, value }) => ({
      label: (
        <div className={style.menuItem}>
          <span>{t(`languages:${label}`)}</span>
          &nbsp;
          <LanguageFlag code={value} className={style.icon} />
        </div>
      ),
      value
    }))
  );

  const language = useSelector(state => state.App.language);
  const label = (
    <div className={style.label}>
      <span className="mr-2">{t('common:Language')}</span>
      <LanguageFlag code={language} className={style.icon} />
    </div>
  );

  return (
    <DropdownMenu
      options={options}
      value={language}
      label={label}
      onChange={onChange}
      right
    />
  );
};

export default LanguageDropdownMenuContainer;
