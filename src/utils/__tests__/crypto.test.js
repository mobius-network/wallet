import { decrypt } from '../decrypt';
import { encrypt } from '../encrypt';

test('test utils/decrypt.decrtypt and utils/encrypt.encrypt', async () => {
  const mnemonic = 'foo bar baz';

  const ecrypted = await encrypt('qwerty', mnemonic);
  const decrypted = await decrypt('qwerty', ecrypted);

  expect(decrypted).toBe(mnemonic);
});
