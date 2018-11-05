import { createSelector } from 'reselect';
import { getCurrencies } from '../userCurrencies';

export const getCurrencySearchQuery = state => state.currencies.searchQuery;

export const getSearchCurrenciesResults = createSelector(
  getCurrencies,
  getCurrencySearchQuery,
  (currencies, filterSubstring) => Object.keys(currencies)
    .map(key => currencies[key])
  // Sort by market cap
    .sort(
      (currencyA, currencyB) => (currencyA.quote.USD.market_cap > currencyB.quote.USD.market_cap
        ? -1
        : 1)
    )
  // Filter just the search results
    .filter(
      ({ name, symbol }) => name.toLowerCase().includes(filterSubstring.toLowerCase())
          || symbol.toLowerCase().includes(filterSubstring.toLowerCase())
    )
);
