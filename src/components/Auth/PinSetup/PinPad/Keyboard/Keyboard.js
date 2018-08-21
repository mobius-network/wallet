import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Animate from 'react-move/Animate';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { easeLinear } from 'd3-ease';
import { range } from 'lodash';

import styles from './styles';

class Keyboard extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    pin: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
  };

  static defaultProps = {
    disabled: false,
  };

  handleNumberButtonClick = value => () => {
    const { onChange, pin } = this.props;
    const newValue = pin + value;

    onChange(newValue);
  };

  handleDeleteButtonClick = () => {
    const { onChange, pin } = this.props;
    const newValue = pin.slice(0, -1);

    onChange(newValue);
  };

  renderNumberButton = number => {
    const text = number.toString();
    const { disabled, pin, pinLength } = this.props;
    const isDisabled = disabled || pin.length === pinLength;

    return (
      <Animate
        show={true}
        start={{
          opacity: 1,
        }}
        update={{
          opacity: [isDisabled ? 0.5 : 1],
          timing: { duration: 200, ease: easeLinear },
        }}
      >
        {({ opacity }) => (
          <TouchableHighlight
            disabled={isDisabled}
            onPress={this.handleNumberButtonClick(text)}
            style={styles.numberButton}
            underlayColor="transparent"
          >
            <Text
              selectable={false}
              style={[styles.numberButtonText, { opacity }]}
            >
              {text}
            </Text>
          </TouchableHighlight>
        )}
      </Animate>
    );
  };

  renderDeleteButton = () => {
    const { pin, disabled } = this.props;
    const isDisabled = disabled || pin.length === 0;

    return (
      <Animate
        show={true}
        start={{
          opacity: 0.5,
        }}
        update={{
          opacity: [isDisabled ? 0.5 : 1],
          timing: { duration: 200, ease: easeLinear },
        }}
      >
        {({ opacity }) => (
          <TouchableHighlight
            disabled={isDisabled}
            onPress={this.handleDeleteButtonClick}
            style={styles.colIcon}
            underlayColor="transparent"
          >
            <Icon
              name="backspace"
              style={[styles.deleteButtonIcon, { opacity }]}
            />
          </TouchableHighlight>
        )}
      </Animate>
    );
  };

  render() {
    return (
      <Grid style={styles.grid}>
        <Row>
          {range(1, 4).map(i => (
            <Col key={i} style={styles.col}>
              {this.renderNumberButton(i)}
            </Col>
          ))}
        </Row>
        <Row>
          {range(4, 7).map(i => (
            <Col key={i} style={styles.col}>
              {this.renderNumberButton(i)}
            </Col>
          ))}
        </Row>
        <Row>
          {range(7, 10).map(i => (
            <Col key={i} style={styles.col}>
              {this.renderNumberButton(i)}
            </Col>
          ))}
        </Row>
        <Row>
          <Col style={styles.col} />
          <Col style={styles.col}>{this.renderNumberButton(0)}</Col>
          <Col style={styles.col}>{this.renderDeleteButton()}</Col>
        </Row>
      </Grid>
    );
  }
}

export default Keyboard;
