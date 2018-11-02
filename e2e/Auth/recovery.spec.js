import { keyboardTap } from '../helpers';

describe('Auth/Recovery', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      languageAndLocale: {
        language: 'en-US',
        locale: 'en-US',
      },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should validate empty mnemonic phrase', async () => {
    await expect(element(by.id('WELCOME_VIEW'))).toBeVisible();

    await element(by.id('RECOVER_WALLET_BUTTON')).tap();

    await element(by.id('RECOVER_WALLET_SUBMIT_BUTTON')).tap();

    await waitFor(element(by.id('RECOVER_WALLET_ALERT')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('RECOVER_WALLET_ALERT'))).toBeVisible();
  });

  it('should validate incorrect mnemonic phrase', async () => {
    await expect(element(by.id('WELCOME_VIEW'))).toBeVisible();

    await element(by.id('RECOVER_WALLET_BUTTON')).tap();

    await expect(element(by.id('RECOVER_WALLET_FIELD'))).toBeVisible();

    const incorrectMnemonic = 'Incorrect mnemonic phrase';

    await element(by.id('RECOVER_WALLET_FIELD')).replaceText(incorrectMnemonic);

    await element(by.id('RECOVER_WALLET_SUBMIT_BUTTON')).tap();

    await waitFor(element(by.id('RECOVER_WALLET_ALERT')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('RECOVER_WALLET_ALERT'))).toBeVisible();
  });

  it('should display info modal', async () => {
    await expect(element(by.id('WELCOME_VIEW'))).toBeVisible();

    await element(by.id('RECOVER_WALLET_BUTTON')).tap();

    await element(by.id('RECOVER_WALLET_INFO_BUTTON')).tap();

    await waitFor(element(by.id('RECOVER_WALLET_INFO')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('RECOVER_WALLET_INFO'))).toBeVisible();
  });

  it('should accept correct mnemonic and setup pin', async () => {
    await expect(element(by.id('WELCOME_VIEW'))).toBeVisible();

    await element(by.id('RECOVER_WALLET_BUTTON')).tap();

    const correctMnemonic = 'clinic vague such honey melody jacket job orbit famous flight protect member envelope hurry school caught actress energy wink stage nurse gift stuff tank';

    await element(by.id('RECOVER_WALLET_FIELD')).replaceText(correctMnemonic);

    await element(by.id('RECOVER_WALLET_SUBMIT_BUTTON')).tap();

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
    await keyboardTap([1, 2, 3, 4, 5, 6]);

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
    await keyboardTap([1, 2, 3, 4, 5, 6]);

    await waitFor(element(by.id('READY_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('READY_VIEW'))).toBeVisible();
  });
});
