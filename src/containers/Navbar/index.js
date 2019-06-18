import React from 'react';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Button, Navbar } from 'components';
import LanguageDropdownMenu from '../LanguageDropdownMenu';

import style from './style.module.scss';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHomeButton: false
    };

    this.goBack = this.goBack.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return {
      showHomeButton: props.location.pathname !== '/'
    };
  }

  goBack() {
    this.props.history.push('/');
  }

  render() {
    const backButton = this.state.showHomeButton ? (
      <div>
        <Button onClick={this.goBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>&nbsp;</span>
          <span>{this.props.t('Home')}</span>
        </Button>
      </div>
    ) : (
      ''
    );

    return (
      <Navbar {...this.props}>
        {backButton}
        <div className={style.pullRight}>
          <LanguageDropdownMenu right />
        </div>
      </Navbar>
    );
  }
}

export default withRouter(withTranslation()(NavbarContainer));
