import { goThroughSignup } from '../helpers';

describe('App/Add Funds', () => {
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

  it('should go to "Add Funds" screen', async () => {
    await element(by.id('DASHBOARD_RECEIVE_BUTTON')).tap();

    await waitFor(element(by.id('ADD_FUNDS_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('ADD_FUNDS_VIEW'))).toBeVisible();
  });

  it('should go to Dashboard on "Go Back" button press', async () => {
    await element(by.id('BACK_BUTTON')).tap();

    await waitFor(element(by.id('DASHBOARD_VIEW')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('DASHBOARD_VIEW'))).toBeVisible();
  });
});
