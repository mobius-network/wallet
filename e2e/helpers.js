/* eslint-disable no-await-in-loop, no-restricted-syntax */
export async function keyboardTap(keys = []) {
  for (const key of keys) {
    await element(by.id(`KEYBOARD_BUTTON_${key}`)).tap();
  }
}
/* eslint-enable no-await-in-loop, no-restricted-syntax */

export async function goThroughSignup() {
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
}
