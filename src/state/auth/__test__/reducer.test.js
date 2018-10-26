import { authReducer } from '../reducer';
import { authActions } from '../actions';

test('test state/auth/reducer initialState', () => {
  expect(authReducer(undefined, {})).toEqual({
    loggedIn: false,
    wallet: null,
    mnemonic: undefined,
    accountFunded: false,
  });
});

test('test state/auth/reducer authActions.set', () => {
  expect(
    authReducer(undefined, {
      type: authActions.set,
      payload: { foo: 'bar' },
    })
  ).toEqual({
    loggedIn: false,
    wallet: null,
    mnemonic: undefined,
    accountFunded: false,
    foo: 'bar',
  });

  expect(
    authReducer(undefined, {
      type: authActions.set,
      payload: { loggedIn: true },
    })
  ).toEqual({
    loggedIn: true,
    wallet: null,
    mnemonic: undefined,
    accountFunded: false,
  });

  expect(
    authReducer(undefined, {
      type: authActions.set,
      payload: { loggedIn: true, wallet: {} },
    })
  ).toEqual({
    loggedIn: true,
    wallet: {},
    mnemonic: undefined,
    accountFunded: false,
  });

  expect(
    authReducer(undefined, {
      type: authActions.set,
      payload: { loggedIn: true, wallet: {}, mnemonic: 'foo' },
    })
  ).toEqual({
    loggedIn: true,
    wallet: {},
    mnemonic: 'foo',
    accountFunded: false,
  });

  expect(
    authReducer(undefined, {
      type: authActions.set,
      payload: {
        loggedIn: true,
        wallet: {},
        mnemonic: 'foo',
        accountFunded: true,
      },
    })
  ).toEqual({
    loggedIn: true,
    wallet: {},
    mnemonic: 'foo',
    accountFunded: true,
  });
});

test('test state/auth/reducer authActions.loginSuccess', () => {
  expect(
    authReducer(undefined, {
      type: authActions.loginSuccess,
    })
  ).toEqual({
    loggedIn: true,
    wallet: null,
    mnemonic: undefined,
    accountFunded: false,
  });
});

test('test state/auth/reducer authActions.logout', () => {
  expect(
    authReducer(
      {
        loggedIn: true,
        wallet: {},
        mnemonic: 'foo',
        accountFunded: true,
      },
      {
        type: authActions.logout,
      }
    )
  ).toEqual({
    loggedIn: false,
    wallet: null,
    mnemonic: undefined,
    accountFunded: false,
  });
});
