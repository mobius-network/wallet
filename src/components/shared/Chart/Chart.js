import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';
import { colors } from 'components/shared/Styleguide';
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
    ),
  };

  render() {
    const { history } = this.props;
    return (
      <Container>
        {history ? (
          <VictoryChart
            domainPadding={{ x: 50 }}
            height={275}
            padding={{
              top: 20,
              bottom: 30,
              left: 65,
              right: 45,
            }}
            scale={{ x: 'time' }}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              style={{ tickLabels: { fontSize: 11 } }}
              tickFormat={history.map(el => el.labelDate)}
            />
            <VictoryAxis
              dependentAxis
              style={{ tickLabels: { fontSize: 11 } }}
              tickFormat={t => `${t.toFixed(3)}`}
            />
            <VictoryCandlestick
              candleColors={{
                positive: colors.chartGreen,
                negative: colors.error,
              }}
              data={history}
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
