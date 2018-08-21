import React, { PureComponent } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import Enter from './Enter';
import Locked from './Locked';

const unlockSteps = {
  enter: 'enter',
  locked: 'locked',
};

class Unlock extends PureComponent {
  static propTypes = {
    lockedSubtitle: PropTypes.string,
    lockedTitle: PropTypes.string,
    maxAttempts: PropTypes.number,
    onComplete: PropTypes.func.isRequired,
    pin: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
    unlockSubtitle: PropTypes.string,
    unlockTitle: PropTypes.string,
  };

  static defaultProps = {
    maxAttempts: 3,
  };

  state = {
    step: unlockSteps.unlock,
    isUnlockStatusRetrieved: false,
    unlockStatus: {
      attempts: '0',
      lastAttemptAt: null,
    },
  };

  componentDidMount() {
    this.getUnlockStatus();
  }

  getUnlockStatus = async () => {
    const { maxAttempts } = this.props;
    const stores = await AsyncStorage.multiGet(['attempts', 'lastAttemptAt']);
    const { attempts, lastAttemptAt } = stores.reduce((acc, key) => {
      acc[key[0]] = key[1];
      return acc;
    }, {});

    this.setState({
      step:
        parseInt(attempts, 10) >= maxAttempts
          ? unlockSteps.locked
          : unlockSteps.enter,
      unlockStatus: {
        attempts: attempts || '0',
        lastAttemptAt,
      },
      isUnlockStatusRetrieved: true,
    });
  };

  setUnlockStatus = async () => {
    const { unlockStatus } = this.state;
    const attempts = (parseInt(unlockStatus.attempts, 10) + 1).toString();
    const lastAttemptAt = new Date().getTime().toString();

    await AsyncStorage.multiSet([
      ['attempts', attempts],
      ['lastAttemptAt', lastAttemptAt],
    ]);

    this.setState({
      unlockStatus: { attempts, lastAttemptAt },
    });
  };

  clearUnlockStatus = async () => {
    await AsyncStorage.multiRemove(['attempts', 'lastAttemptAt']);

    this.setState({
      step: unlockSteps.enter,
      unlockStatus: { attempts: '0', lastAttemptAt: '' },
    });
  };

  handleUnlockComplete = async () => {
    await this.clearUnlockStatus();

    this.props.onComplete();
  };

  handleUnlockFailed = () => this.setState({ step: unlockSteps.locked });

  render() {
    const { step, isUnlockStatusRetrieved, unlockStatus } = this.state;
    const {
      lockedSubtitle,
      lockedTitle,
      maxAttempts,
      pin,
      pinLength,
      unlockSubtitle,
      unlockTitle,
    } = this.props;

    if (isUnlockStatusRetrieved) {
      switch (step) {
        case unlockSteps.enter:
          return (
            <Enter
              maxAttempts={maxAttempts}
              onComplete={this.handleUnlockComplete}
              onError={this.handleUnlockFailed}
              pin={pin}
              pinLength={pinLength}
              setUnlockStatus={this.setUnlockStatus}
              subtitle={unlockSubtitle}
              title={unlockTitle}
              unlockStatus={unlockStatus}
            />
          );

        case unlockSteps.locked:
          return (
            <Locked
              maxAttempts={maxAttempts}
              onComplete={this.clearUnlockStatus}
              subtitle={lockedSubtitle}
              title={lockedTitle}
              unlockStatus={unlockStatus}
            />
          );

        default:
          return null;
      }
    }

    return null;
  }
}

export default Unlock;
