import { keyboardTap } from '../helpers';

describe('Auth/Signup', () => {
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

  it('should handle incorrect pin setup', async () => {
    await expect(element(by.id('WELCOME_VIEW'))).toBeVisible();

    await element(by.id('SETUP_WALLET_BUTTON')).tap();

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
    await keyboardTap([1, 2, 3, 4, 5, 6]);

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
    await keyboardTap([6, 5, 4, 3, 2, 1]);

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
  });

  it('should setup pin and mnemonic', async () => {
    await expect(element(by.id('WELCOME_VIEW'))).toBeVisible();

    await element(by.id('SETUP_WALLET_BUTTON')).tap();

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
    await keyboardTap([1, 2, 3, 4, 5, 6]);

    await expect(element(by.id('KEYBOARD'))).toBeVisible();
    await keyboardTap([1, 2, 3, 4, 5, 6]);

    await expect(element(by.id('WRITE_MNEMONIC_VIEW'))).toBeVisible();

    await element(by.id('WRITE_MNEMONIC_CONTINUE_BUTTON')).tap();

    await element(
      by
        .type('RCTView')
        .withAncestor(
          by
            .type('RCTView')
            .withAncestor(by.id('WRITE_MNEMONIC_ALERT_CONFIRM_CHECKBOX'))
        )
    ).tap();

    await element(by.id('WRITE_MNEMONIC_ALERT_CONFIRM_BUTTON')).tap();

    await expect(element(by.id('CONFIRM_MNEMONIC_VIEW'))).toBeVisible();

    await element(by.id('CONFIRM_MNEMONIC_VARIANT')).tap();

    await element(
      by
        .type('RCTView')
        .withAncestor(
          by
            .type('RCTView')
            .withAncestor(by.id('CONFIRM_MNEMONIC_ALERT_CONFIRM_CHECKBOX'))
        )
    ).tap();

    await element(by.id('CONFIRM_MNEMONIC_ALERT_CONFIRM_BUTTON')).tap();

    await waitFor(element(by.id('READY_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('READY_VIEW'))).toBeVisible();
  });
});
