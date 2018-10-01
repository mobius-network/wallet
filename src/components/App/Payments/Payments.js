import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentBalance from 'components/shared/CurrentBalance';

import { Container } from './styles';

class Payments extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
    // stopWatchPrices: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    // usdBalance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    //   .isRequired,
    // watchPrices: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // this.props.watchPrices();
  }

  componentWillUnmount() {
    // this.props.stopWatchPrices();
  }

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  render() {
    // const { t } = this.props;

    return (
      <Container>
        <CurrentBalance onMenuPress={this.handleMenuButtonClick} />
      </Container>
    );
  }
}

export default Payments;
