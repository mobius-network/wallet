import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { range } from 'lodash';

import Button from './Button';
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
      <Button
        disabled={isDisabled}
        onPress={this.handleNumberButtonClick(text)}
      >
        {({ color, opacity }) => (
          <Text
            selectable={false}
            style={[styles.numberButtonText, { opacity, color }]}
          >
            {text}
          </Text>
        )}
      </Button>
    );
  };

  renderDeleteButton = () => {
    const { pin, disabled } = this.props;
    const isDisabled = disabled || pin.length === 0;

    return (
      <Button disabled={isDisabled} onPress={this.handleDeleteButtonClick}>
        {({ color, opacity }) => (
          <Icon
            name="backspace"
            style={[styles.deleteButtonIcon, { opacity, color }]}
          />
        )}
      </Button>
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
