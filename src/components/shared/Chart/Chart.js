import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from 'victory-native';
import { colors } from 'components/shared/Styleguide';
import { LoadingIconView, LoadingIcon, Container } from './styles';

class Chart extends Component {
  static propTypes = {
    asset: PropTypes.string.isRequired,
    history: PropTypes.shape({
      mobi: PropTypes.array,
      xlm: PropTypes.array,
    }),
  };

  render() {
    const { history, asset } = this.props;
    const tokenHistory = history[asset];
    return (
      <Container>
        {tokenHistory ? (
          <VictoryChart
            containerComponent={<VictoryZoomContainer />}
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
              tickFormat={tokenHistory.map(el => `${el.d.format('MM/DD')}`)}
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
              data={tokenHistory}
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
