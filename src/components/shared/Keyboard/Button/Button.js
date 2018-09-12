import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import Animate from 'react-move/Animate';
import { easeLinear } from 'd3-ease';

import { colors } from 'components/shared/Styleguide';

import styles from './styles';

class Button extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
  };

  state = {
    color: colors.textPrimary,
  };

  handleShowOverlay = () => this.setState({ color: colors.textWhite });

  handleHideOverlay = () => this.setState({ color: colors.textPrimary });

  render() {
    const { disabled, onPress, children } = this.props;
    const { color } = this.state;

    return (
      <Animate
        show
        start={{
          opacity: 1,
        }}
        update={{
          opacity: [disabled ? 0.5 : 1],
          timing: { duration: 200, ease: easeLinear },
        }}
      >
        {({ opacity }) => (
          <TouchableHighlight
            disabled={disabled}
            onHideUnderlay={this.handleHideOverlay}
            onPress={onPress}
            onShowUnderlay={this.handleShowOverlay}
            style={styles.button}
            underlayColor={colors.textPrimary}
          >
            {children({ color, opacity })}
          </TouchableHighlight>
        )}
      </Animate>
    );
  }
}

export default Button;
