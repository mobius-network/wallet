import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Chart from 'components/shared/Chart';
import {
  Container,
  IconLogotype,
  Info,
  Title,
  Description,
  AmountInfo,
  MainAmount,
  SecondartAmount,
} from './styles';

class AmountItem extends Component {
  static propTypes = {
    description: PropTypes.string,
    icon: PropTypes.string,
    mainAmount: PropTypes.string,
    secondaryAmount: PropTypes.string,
    title: PropTypes.string,
  };

  state = {
    isOpened: false,
  };

  clickHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const { isOpened } = this.state;
    const {
      icon,
      title,
      description,
      mainAmount,
      secondaryAmount,
    } = this.props;
    return (
      <TouchableOpacity onPress={this.clickHandler}>
        <Container margin={isOpened}>
          <IconLogotype name={icon} size={40} />

          <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Info>

          <AmountInfo>
            <MainAmount>{mainAmount}</MainAmount>
            <SecondartAmount>{secondaryAmount}</SecondartAmount>
          </AmountInfo>
        </Container>
        {isOpened && <Chart asset={title.toLowerCase()} />}
      </TouchableOpacity>
    );
  }
}

export default AmountItem;
