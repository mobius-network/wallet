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

  renderTrend() {
    const { change } = this.props;

    const changeIconName = change > 0
      ? { color: '#69f0ae', name: 'caret-up' }
      : { color: '#ff5252', name: 'caret-down' };
    const changeAmount = `${change} %`;
    return (
      <Trend>
        <SecondaryAmount>{changeAmount}</SecondaryAmount>
        <IconChangeType>
          <Icon
            color={changeIconName.color}
            name={changeIconName.name}
            size={14}
          />
        </IconChangeType>
      </Trend>
    );
  }

  render() {
    const {
      icon,
      title,
      description,
      mainAmount,
      secondaryAmount,
    } = this.props;

    return (
      <Container>
        <IconLogoType name={icon} size={40} />

        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>

        <AmountInfo>
          {this.renderTrend()}

          <MainAmount>{mainAmount}</MainAmount>
          <SecondaryAmount>{secondaryAmount}</SecondaryAmount>
        </AmountInfo>
      </Container>
    );
  }
}

export default AmountItem;
