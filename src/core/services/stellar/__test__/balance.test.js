import { parseBalance, parsedBalanceValue } from '../balance';

test('test core/services/stellar/balance.parseBalance', () => {
  expect(parseBalance()).toBe(null);

  expect(
    parseBalance({
      balances: [
        { asset_code: 'XLM', balance: 42 },
        { asset_type: 'MOBI', balance: 1 },
      ],
    })
  ).toEqual({
    xlm: { asset_code: 'XLM', balance: 42 },
    mobi: { asset_type: 'MOBI', balance: 1 },
  });
});

test('test core/services/stellar/balance.parsedBalanceValue', () => {
  expect(
    parsedBalanceValue(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
        mobi: { asset_type: 'MOBI', balance: 99 },
      },
      'mobi'
    )
  ).toBe(99);

  expect(
    parsedBalanceValue(
      {
        xlm: { asset_code: 'XLM', balance: 42 },
        mobi: { asset_type: 'MOBI', balance: 1 },
      },
      'xxx'
    )
  ).toBe(0);
});
