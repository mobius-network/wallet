/* eslint-disable no-await-in-loop, no-restricted-syntax */
export async function keyboardTap(keys = []) {
  for (const key of keys) {
    await element(by.id(`KEYBOARD_BUTTON_${key}`)).tap();
  }
}
/* eslint-enable no-await-in-loop, no-restricted-syntax */
