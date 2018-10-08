import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Notice extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          action: PropTypes.func,
          actionLabel: PropTypes.string,
          message: PropTypes.string,
          type: PropTypes.oneOf(['error', 'success']).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  renderTitle() {
    const {
      t,
      navigation: {
        state: {
          params: { type },
        },
      },
    } = this.props;

    switch (type) {
      case 'error':
      case 'success':
        return t(`notice.${type}.title`);
      default:
        return null;
    }
  }

  renderMessage() {
    const {
      t,
      navigation: {
        state: {
          params: { type, message },
        },
      },
    } = this.props;

    switch (type) {
      case 'error':
        return message || t('notice.error.defaultMessage');
      default:
        return message;
    }
  }

  renderActionButton() {
    const {
      t,
      dispatch,
      navigation: {
        navigate,
        state: {
          params: { action, actionLabel, type },
        },
      },
    } = this.props;

    if (isNil(action)) {
      return null;
    }

    const title = actionLabel || t(`notice.${type}.defaultActionLabel`);

    return (
      <Button
        onPress={() => action({ dispatch, navigate })}
        title={title.toUpperCase()}
        variant="primary"
      />
    );
  }

  renderSecondaryAction() {
    const {
      t,
      dispatch,
      navigation: {
        navigate,
        state: {
          params: { goBackAction },
        },
      },
    } = this.props;

    if (isNil(goBackAction)) {
      return null;
    }

    return (
      <Button
        onPress={() => goBackAction({ dispatch, navigate })}
        title={t('notice.goBack')}
        variant="text"
      />
    );
  }

  render() {
    return (
      <BackgroundView
        action={this.renderActionButton()}
        content={
          <SimpleInfo
            description={this.renderMessage()}
            title={this.renderTitle()}
          />
        }
        secondaryAction={this.renderSecondaryAction()}
        variant="center"
      />
    );
  }
}

export default Notice;
