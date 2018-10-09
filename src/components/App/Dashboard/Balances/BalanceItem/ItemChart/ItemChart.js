import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';
import { LoadingIconView, LoadingIcon, Container } from './styles';

class ItemChart extends Component {
  static propTypes = {
    asset: PropTypes.string,
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
    ).isRequired,
  };

  state = {};

  componentDidMount() {
    const { history } = this.props;
    history && this.formatData(history);
  }

  formatData(data) {
    let sorted = data.sort((a, b) => a.time - b.time);
    sorted = sorted.map((el, idx) => {
      const elCopy = el;
      const d = new Date(el.time * 1000);
      elCopy.labelDate = `${d.getUTCMonth() + 1}/${d.getUTCDate()}`;
      elCopy.x = idx + 1;
      return elCopy;
    });

    this.setState({
      data: sorted,
      dates: sorted.map(el => el.labelDate),
    });
  }

  render() {
    return (
      <Container>
        {this.state.data ? (
          <VictoryChart
            domainPadding={{ x: 50 }}
            height={275}
            padding={{
              top: 20,
              bottom: 30,
              left: 60,
              right: 45,
            }}
            scale={{ x: 'time' }}
            theme={VictoryTheme.material}
          >
            <VictoryAxis tickFormat={this.state.dates} />
            <VictoryAxis dependentAxis tickFormat={t => `${t.toFixed(3)}`} />
            <VictoryCandlestick
              candleColors={{ positive: '#27ae60', negative: '#e74c3c' }}
              data={this.state.data}
            />
          </VictoryChart>
        ) : (
          <LoadingIconView>
            <LoadingIcon />
          </LoadingIconView>
        )}
      </Container>
    );
  }
}

export default ItemChart;
