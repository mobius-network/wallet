import {
  getAccountNumber,
  getMnemonic,
  getMnemonicVariants,
  getWallet,
  getIsLoggedIn,
  getIsAccountFunded,
  getIsAuthorized,
  getPublicKeyFor,
  getSecretKeyFor,
  getKeypairFor,
} from '../selectors';

test('test state/auth/selectors.getAccountNumber', () => {
  expect(getAccountNumber(undefined, {})).toBe(0);
  expect(getAccountNumber(undefined, { accountNumber: '12345' })).toBe(12345);
});

test('test state/auth/selectors.getMnemonic', () => {
  expect(getMnemonic({ auth: { mnemonic: 'foo' } })).toBe('foo');
  expect(getMnemonic({ auth: {} })).toBe(undefined);
});

test('test state/auth/selectors.getMnemonicVariants', () => {
  const varians = getMnemonicVariants.resultFunc('foo');

  expect(varians.length).toBe(3);
});

test('test state/auth/selectors.getWallet', () => {
  expect(getWallet({ auth: { wallet: 'foo' } })).toBe('foo');
  expect(getWallet({ auth: {} })).toBe(undefined);
});

test('test state/auth/selectors.getIsLoggedIn', () => {
  expect(getIsLoggedIn({ auth: { loggedIn: 'foo' } })).toBe('foo');
  expect(getIsLoggedIn({ auth: {} })).toBe(undefined);
});

test('test state/auth/selectors.getIsAccountFunded', () => {
  expect(getIsAccountFunded({ auth: { accountFunded: 'foo' } })).toBe('foo');
  expect(getIsAccountFunded({ auth: {} })).toBe(undefined);
});

test('test state/auth/selectors.getIsAuthorized', () => {
  expect(getIsAuthorized({ auth: { wallet: {}, loggedIn: 'foo' } })).toBe(
    'foo'
  );
  expect(getIsAuthorized({ auth: { wallet: {} } })).toBe(undefined);
  expect(getIsAuthorized({ auth: { loggedIn: 'foo' } })).toBe(false);
  expect(getIsAuthorized({ auth: {} })).toBe(false);
});

test('test state/auth/selectors.getPublicKeyFor', () => {
  expect(
    getPublicKeyFor.resultFunc(
      {
        getPublicKey: x => x,
      },
      12345
    )
  ).toBe(12345);

  expect(getPublicKeyFor.resultFunc(undefined, 12345)).toBe(undefined);
});

test('test state/auth/selectors.getSecretKeyFor', () => {
  expect(
    getSecretKeyFor.resultFunc(
      {
        getSecret: x => x,
      },
      12345
    )
  ).toBe(12345);

  expect(getSecretKeyFor.resultFunc(undefined, 12345)).toBe(undefined);
});

test('test state/auth/selectors.getKeypairFor', () => {
  expect(
    getKeypairFor.resultFunc(
      {
        getKeypair: x => x,
      },
      12345
    )
  ).toBe(12345);

  expect(getKeypairFor.resultFunc(undefined, 12345)).toBe(undefined);
});
