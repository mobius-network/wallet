import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

import {
  Content, LoadingIconView, LoadingIcon, FakeButton,
} from './styles';

class LoadingView extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onError: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    error: PropTypes.bool,
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
        variant="bottom"
        content={
          <Content>
            {isLoading && (
              <LoadingIconView>
                <LoadingIcon />
              </LoadingIconView>
            )}

            {error ? (
              <SimpleInfo
                title={t('loadingView.errorTitle')}
                description={t('loadingView.errorDescription')}
              />
            ) : (
              <SimpleInfo
                title={t('loadingView.title')}
                description={t('loadingView.description')}
              />
            )}
          </Content>
        }
        action={
          error ? (
            <Button onPress={onError} title={t('loadingView.tryAgainButton')} />
          ) : (
            <FakeButton />
          )
        }
      />
    );
  }
}

export default LoadingView;
