import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  };

  renderChangeIcon() {
    const { change } = this.props;

    const changeIconName = change > 0
      ? { color: '#69f0ae', name: 'caret-up' }
      : { color: '#ff5252', name: 'caret-down' };

    return (
      <Icon color={changeIconName.color} name={changeIconName.name} size={14} />
    );
  }

  render() {
    const {
      icon,
      title,
      description,
      mainAmount,
      secondaryAmount,
      change,
    } = this.props;

    return (
      <Container>
        <IconLogoType name={icon} size={40} />

        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>

        <AmountInfo>
          <Trend>
            <SecondaryAmount>{change}</SecondaryAmount>
            <IconChangeType>{this.renderChangeIcon()}</IconChangeType>
          </Trend>

          <MainAmount>{mainAmount}</MainAmount>
          <SecondaryAmount>{secondaryAmount}</SecondaryAmount>
        </AmountInfo>
      </Container>
    );
  }
}

export default AmountItem;
