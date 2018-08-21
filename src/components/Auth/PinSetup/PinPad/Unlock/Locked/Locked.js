import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const timeToLock = 300000; // 5 minutes

class Locked extends Component {
  static propTypes = {
    maxAttempts: PropTypes.number,
    onComplete: PropTypes.func.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    unlockStatus: PropTypes.shape({
      attempts: PropTypes.string.isRequired,
      lastAttemptAt: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const endTime = parseInt(props.unlockStatus.lastAttemptAt, 10) + timeToLock;
    const now = new Date().getTime();

    this.state = {
      endTime,
      remaining: endTime - now,
    };
  }

  componentDidMount() {
    if (this.state.remaining - 1000 <= 0) {
      this.props.onComplete();
      return;
    }

    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  tick = () => {
    this.setState({ remaining: this.state.remaining - 1000 }, () => {
      if (this.state.remaining <= 0) {
        clearInterval(this.interval);
        this.props.onComplete();
      }
    });
  };

  renderTimer = () => {
    const { remaining } = this.state;
    const minutes = Math.floor(remaining / 1000 / 60);
    const seconds = Math.floor(remaining / 1000) % 60;

    if (minutes <= 0 && seconds <= 0) {
      return null;
    }

    return (
      <Text style={styles.timer}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    );
  };

  render() {
    const { title, subtitle } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.contentContainer}>{this.renderTimer()}</View>
      </View>
    );
  }
}

export default Locked;
