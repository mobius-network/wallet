import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Chart from 'components/shared/Chart';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  IconLogoType,
  Info,
  Title,
  Description,
  AmountInfo,
  MainAmount,
  SecondaryAmount,
  Trend,
  IconChangeType,
} from './styles';

class AmountItem extends Component {
  static propTypes = {
    change: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    mainAmount: PropTypes.string,
    secondaryAmount: PropTypes.string,
    title: PropTypes.string,
    variant: PropTypes.oneOf(['main', 'simple']),
  };

  static defaultProps = {
    variant: 'main',
  };

  state = {
    isOpened: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.mainAmount !== this.props.mainAmount
      || nextProps.secondaryAmount !== this.props.secondaryAmount
      || nextState.isOpened !== this.state.isOpened
    );
  }

  clickHandler = () => {
    if (this.props.variant === 'main') {
      this.setState({ isOpened: !this.state.isOpened });
    }
  };

  renderTrend() {
    const { change } = this.props;
    const icon = change && change !== '0';
    const changeIconName = change > 0
      ? {
        color: '#69f0ae',
        name: 'caret-up',
      }
      : {
        color: '#ff5252',
        name: 'caret-down',
      };
    const changeAmount = change !== undefined ? `${change} %` : '-- %';
    return (
      <Trend>
        <SecondaryAmount>{changeAmount}</SecondaryAmount>
        {icon && (
          <IconChangeType>
            <Icon
              color={changeIconName.color}
              name={changeIconName.name}
              size={14}
            />
          </IconChangeType>
        )}
      </Trend>
    );
  }

  render() {
    const { isOpened } = this.state;
    const {
      icon,
      title,
      description,
      mainAmount,
      secondaryAmount,
      variant,
    } = this.props;

    return (
      <TouchableOpacity onPress={this.clickHandler}>
        <Container isSmallMarginBottom={variant === 'simple' || isOpened}>
          <IconLogoType name={icon} size={40} />

          <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Info>

          <AmountInfo>
            {variant === 'main' && this.renderTrend()}

            <MainAmount>{mainAmount}</MainAmount>
            <SecondaryAmount>{secondaryAmount}</SecondaryAmount>
          </AmountInfo>
        </Container>
        {isOpened && <Chart asset={title.toLowerCase()} />}
      </TouchableOpacity>
    );
  }
}

export default AmountItem;
