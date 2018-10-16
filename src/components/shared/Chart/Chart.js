import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';
import { LoadingIconView, LoadingIcon, Container } from './styles';

class Chart extends Component {
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

  render() {
    return (
      <Container>
        {this.props.history ? (
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
            <VictoryAxis tickFormat={t => t.labelDate} />
            <VictoryAxis dependentAxis tickFormat={t => `${t.toFixed(3)}`} />
            <VictoryCandlestick
              candleColors={{ positive: '#27ae60', negative: '#e74c3c' }}
              data={this.props.history}
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

export default Chart;
