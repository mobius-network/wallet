import { goThroughSignup, keyboardTap } from '../helpers';

describe('App/Send', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      languageAndLocale: {
        language: 'en-US',
        locale: 'en-US',
      },
    });
  });

  it('should successfully setup wallet', async () => {
    await goThroughSignup();

    await waitFor(element(by.id('READY_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('READY_VIEW'))).toBeVisible();
  });

  it('should display dashboard screen', async () => {
    await element(by.id('READY_CONFIRM_BUTTON')).tap();

    await waitFor(element(by.id('DASHBOARD_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('DASHBOARD_VIEW'))).toBeVisible();
  });

  it('should go to "Amount Form" screen', async () => {
    await element(by.id('DASHBOARD_SEND_BUTTON')).tap();

    await waitFor(element(by.id('SEND_AMOUNT_FORM')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('SEND_AMOUNT_FORM'))).toBeVisible();
  });

  it('should go to Dashboard on "Go Back" button press', async () => {
    await element(by.id('BACK_BUTTON')).tap();

    await waitFor(element(by.id('DASHBOARD_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('DASHBOARD_VIEW'))).toBeVisible();
  });

  it('should go to "Amount Form" screen and handle amount change using keypad', async () => {
    await element(by.id('DASHBOARD_SEND_BUTTON')).tap();

    await waitFor(element(by.id('SEND_AMOUNT_FORM')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('SEND_AMOUNT_FORM'))).toBeVisible();

    await keyboardTap([9, 9, 9, 9, 9, 9]);

    await expect(element(by.id('SEND_AMOUNT_FORM_AMOUNT'))).toHaveText('999999');
  });

  it('should validate amount', async () => {
    await element(by.id('SEND_AMOUNT_FORM_SUBMIT_BUTTON')).tap();

    await waitFor(element(by.id('SEND_AMOUNT_FORM_ALERT')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('SEND_AMOUNT_FORM_ALERT'))).toBeVisible();
  });
});
