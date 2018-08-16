import crypto from 'crypto';
import * as Keychain from 'react-native-keychain';

export async function decrypt(password) {
  const encryptedMnemonic = await Keychain.getGenericPassword({
    service: 'mnemonic',
  });

  const decipher = crypto.createDecipher('aes192', password);
  let decryptedMnemonic = decipher.update(encryptedMnemonic, 'hex', 'utf8');
  decryptedMnemonic += decipher.final('utf8');

  return decryptedMnemonic;
}
