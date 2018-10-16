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
    history: PropTypes.array,
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
    const { isOpened } = this.state;
    return (
      <TouchableOpacity onPress={this.clickHandler}>
        <Container margin={isOpened && history !== null}>
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
        {isOpened
          && history && <Chart asset={title.toUpperCase()} history={history} />}
      </TouchableOpacity>
    );
  }
}

export default AmountItem;
