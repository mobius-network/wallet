import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { range, isNumber } from 'lodash';

import Button from './Button';
import styles from './styles';

class Keyboard extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    withDecimals: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    maxLength: null,
    value: '',
    withDecimals: false,
  };

  static getDerivedStateFromProps(props, state) {
    const isDisabled = props.disabled
      || (isNumber(props.maxLength) && props.value.length >= props.maxLength);

    if (isDisabled !== state.isDisabled) {
      return { isDisabled };
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isDisabled: props.disabled,
    };
  }

  handleButtonClick = text => () => {
    const { onChange, value } = this.props;
    const newValue = value + text;

    onChange(newValue);
  };

  handleDeleteButtonClick = () => {
    const { onChange, value } = this.props;
    const newValue = value.slice(0, -1);

    onChange(newValue);
  };

  renderNumberButton = (number) => {
    const text = number.toString();
    const { isDisabled } = this.state;

    return (
      <Button disabled={isDisabled} onPress={this.handleButtonClick(text)}>
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

  renderDelimiterButton = () => {
    const { value, disabled } = this.props;
    const isDelimeterButtonDisabled = disabled || value.indexOf('.') > -1;

    return (
      <Button
        disabled={isDelimeterButtonDisabled}
        onPress={this.handleButtonClick('.')}
      >
        {({ color, opacity }) => (
          <Text
            selectable={false}
            style={[styles.numberButtonText, { opacity, color }]}
          >
            .
          </Text>
        )}
      </Button>
    );
  };

  renderDeleteButton = () => {
    const { value, disabled } = this.props;
    const isDeleteButtonDisabled = disabled || value.length === 0;

    return (
      <Button
        disabled={isDeleteButtonDisabled}
        onPress={this.handleDeleteButtonClick}
      >
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
    const { withDecimals } = this.props;

    return (
      <Grid style={styles.grid}>
        <Row style={styles.row}>
          {range(1, 4).map(i => (
            <Col key={i} style={styles.col}>
              {this.renderNumberButton(i)}
            </Col>
          ))}
        </Row>
        <Row style={styles.row}>
          {range(4, 7).map(i => (
            <Col key={i} style={styles.col}>
              {this.renderNumberButton(i)}
            </Col>
          ))}
        </Row>
        <Row style={styles.row}>
          {range(7, 10).map(i => (
            <Col key={i} style={styles.col}>
              {this.renderNumberButton(i)}
            </Col>
          ))}
        </Row>
        <Row style={styles.row}>
          <Col style={styles.col}>
            {withDecimals ? this.renderDelimiterButton() : null}
          </Col>
          <Col style={styles.col}>{this.renderNumberButton(0)}</Col>
          <Col style={styles.col}>{this.renderDeleteButton()}</Col>
        </Row>
      </Grid>
    );
  }
}

export default Keyboard;
