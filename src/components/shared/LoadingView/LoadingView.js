import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';
import LoadingIcon from 'components/shared/LoadingIcon';

import { Content, FakeButton } from './styles';

class LoadingView extends Component {
  static propTypes = {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    onError: PropTypes.func,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoading: true,
    error: null,
  };

  render() {
    const {
      error, onError, t, isLoading,
    } = this.props;

    return (
      <BackgroundView
        action={
          error ? (
            <Button onPress={onError} title={t('loadingView.tryAgainButton')} />
          ) : (
            <FakeButton />
          )
        }
        content={
          <Content>
            {isLoading && <LoadingIcon />}

            {error ? (
              <SimpleInfo
                description={t('loadingView.errorDescription')}
                title={t('loadingView.errorTitle')}
              />
            ) : (
              <SimpleInfo
                description={t('loadingView.description')}
                title={t('loadingView.title')}
              />
            )}
          </Content>
        }
        variant="bottom"
      />
    );
  }
}

export default LoadingView;
