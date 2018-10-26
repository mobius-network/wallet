import { pricesReducer } from '../reducer';

import { pricesActions } from '../actions';

test('test state/prices/reducer pricesActions.setQuotes', () => {
  const expected = pricesReducer(undefined, {
    type: pricesActions.setQuotes,
    payload: {
      2429: { quote: { USD: { price: 4 } } },
      512: { quote: { USD: { price: 2 } } },
    },
  });

  expect(expected).toEqual({ mobi: { usd: 4 }, xlm: { usd: 2 } });
});
