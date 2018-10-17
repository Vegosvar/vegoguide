import { connect } from 'react-redux';
import i18n from 'i18n';
import { DropdownMenu } from 'components';
import { changeLanguage } from 'store/modules/App/actions';

const mapStateToProps = (state, { url }) => ({
  options: state.App.languages.map(({ label, value }) => ({
    label: i18n.t(`languages:${label}`),
    value
  })),
  label: i18n.t('common:Language')
});

const mapDispatchToProps = {
  onChange: changeLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownMenu);
