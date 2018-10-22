import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  IconLogotype,
  Info,
  Title,
  Description,
  AmountInfo,
  MainAmount,
  SecondaryAmount,
} from './styles';

class AmountItem extends Component {
  static propTypes = {
    description: PropTypes.string,
    icon: PropTypes.string,
    mainAmount: PropTypes.string,
    secondaryAmount: PropTypes.string,
    title: PropTypes.string,
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.mainAmount !== this.props.mainAmount
      || nextProps.secondaryAmount !== this.props.secondaryAmount
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
        <IconLogotype name={icon} size={40} />

        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>

        <AmountInfo>
          <MainAmount>{mainAmount}</MainAmount>
          <SecondaryAmount>{secondaryAmount}</SecondaryAmount>
        </AmountInfo>
      </Container>
    );
  }
}

export default AmountItem;
