import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Success extends PureComponent {
  static propTypes = {
    amount: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    destination: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    resetForm: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  handleSuccess = async () => {
    const { resetForm, navigation } = this.props;

    await navigation.navigate('Dashboard');

    resetForm();
  };

  render() {
    const {
      asset, amount, destination, t,
    } = this.props;

    const maskedDestination = destination
      ? `${destination.slice(0, 11)}…${destination.slice(-11)}`
      : '';

    return (
      <BackgroundView
        action={
          <Button
            onPress={this.handleSuccess}
            title={t('shared.done')}
            variant="primary"
          />
        }
        content={
          <SimpleInfo
            description={
              <Trans i18nKey="send.success.description">
                {amount}
                {asset}
                {maskedDestination}
              </Trans>
            }
            title={t('send.success.title')}
          />
        }
        variant="center"
      />
    );
  }
}

export default Success;
