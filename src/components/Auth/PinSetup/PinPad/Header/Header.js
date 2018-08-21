import React, { Component } from 'react';
import {
  Dimensions, Text, Vibration, View,
} from 'react-native';
import Animate from 'react-move/Animate';
import LinearGradient from 'react-native-linear-gradient';
import { easeLinear } from 'd3-ease';
import PropTypes from 'prop-types';
import { noop, range } from 'lodash';

import styles from './styles';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class Header extends Component {
  static propTypes = {
    errorSubtitle: PropTypes.string,
    errorTitle: PropTypes.string,
    onErrorShown: PropTypes.func,
    pin: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
    showError: PropTypes.bool,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    errorSubtitle: null,
    onErrorShow: noop,
    showError: false,
    subtitle: null,
  };

  state = {
    moveData: { x: 0 },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.showError === this.props.showError) {
      return;
    }

    if (!this.props.showError) {
      return;
    }

    this.doShake();
  }

  async doShake() {
    const duration = 70;
    const finalDuration = 2000;
    const length = Dimensions.get('window').width / 3;

    Vibration.vibrate(500, false);

    await delay(duration);
    this.setState({ moveData: { x: length } });

    await delay(duration);
    this.setState({ moveData: { x: -length } });

    await delay(duration);
    this.setState({ moveData: { x: length / 2 } });

    await delay(duration);
    this.setState({ moveData: { x: -length / 2 } });

    await delay(duration);
    this.setState({ moveData: { x: length / 4 } });

    await delay(duration);
    this.setState({ moveData: { x: -length / 4 } });

    await delay(duration);
    this.setState({ moveData: { x: 0 } });

    await delay(finalDuration);
    this.props.onErrorShown();
  }

  renderTitle = opacity => {
    const { title, errorTitle, showError } = this.props;

    return (
      <Text
        selectable={false}
        style={[showError ? styles.errorTitle : styles.title, { opacity }]}
      >
        {showError ? errorTitle : title}
      </Text>
    );
  };

  renderSubtitle = opacity => {
    const { subtitle, errorSubtitle, showError } = this.props;

    return (
      <Text
        selectable={false}
        style={[
          showError ? styles.errorSubtitle : styles.subtitle,
          { opacity },
        ]}
      >
        {showError ? errorSubtitle : subtitle}
      </Text>
    );
  };

  renderDot = (index, x) => {
    const { pin, showError } = this.props;

    if (showError) {
      return <View key={index} style={[styles.errorDot, { left: x }]} />;
    }

    if (pin.length >= index + 1) {
      return (
        <LinearGradient
          colors={['#4637E6', '#8C2DFD']}
          end={{ x: 1, y: 1 }}
          key={index}
          start={{ x: 0, y: 1 }}
          style={[styles.dot, { left: x }]}
        />
      );
    }

    return <View key={index} style={[styles.emptyDot, { left: x }]} />;
  };

  render() {
    const { pinLength } = this.props;
    const { moveData } = this.state;

    return (
      <View style={styles.container}>
        <Animate
          show={true}
          start={{
            opacity: 0,
          }}
          enter={{
            opacity: [1],
            timing: { duration: 200, ease: easeLinear },
          }}
        >
          {({ opacity }) => (
            <View style={styles.textContainer}>
              {this.renderTitle(opacity)}
              {this.renderSubtitle(opacity)}
            </View>
          )}
        </Animate>
        <Animate
          show={true}
          start={{
            x: 0,
          }}
          update={{
            x: [moveData.x],
            timing: { duration: 200, ease: easeLinear },
          }}
        >
          {({ x }) => (
            <View style={styles.dotsContainer}>
              {range(pinLength).map(index => this.renderDot(index, x))}
            </View>
          )}
        </Animate>
      </View>
    );
  }
}

export default Header;
