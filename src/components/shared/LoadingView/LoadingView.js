import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import {
  ImageBackgroundView,
  ContentView,
  Description,
  Title,
  LoadingIconView,
  LoadingIcon,
} from './styles';

import background from './images/bg.png';

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
      <ImageBackgroundView source={background}>
        {isLoading && (
          <LoadingIconView>
            <LoadingIcon />
          </LoadingIconView>
        )}

        <ContentView>
          {error ? (
            <Fragment>
              <Title selectable={false}>{t('loadingView.errorTitle')}</Title>
              <Description selectable={false}>
                {t('loadingView.errorDescription')}
              </Description>
              <Button
                onPress={onError}
                title={t('loadingView.tryAgainButton')}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Title selectable={false}>{t('loadingView.title')}</Title>
              <Description selectable={false}>
                {t('loadingView.description')}
              </Description>
            </Fragment>
          )}
        </ContentView>
      </ImageBackgroundView>
    );
  }
}

export default LoadingView;
