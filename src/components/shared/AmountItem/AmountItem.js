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
    history: PropTypes.arrayOf(
      PropTypes.shape({
        close: PropTypes.number.isRequired,
        high: PropTypes.number.isRequired,
        low: PropTypes.number.isRequired,
        open: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        volumefrom: PropTypes.number.isRequired,
        volumeto: PropTypes.number.isRequired,
      })
    ),
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
    const {
      icon,
      title,
      description,
      mainAmount,
      secondaryAmount,
      history,
    } = this.props;

    return (
      <TouchableOpacity onPress={this.clickHandler}>
        <Container margin={this.isOpened && history !== null}>
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
        {this.state.isOpened
          && history && <Chart asset={title.toUpperCase()} history={history} />}
      </TouchableOpacity>
    );
  }
}

export default AmountItem;
