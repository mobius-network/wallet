import crypto from 'crypto';

export async function decrypt(password, encryptedMnemonic) {
  const decipher = crypto.createDecipher('aes192', password);
  let decryptedMnemonic = decipher.update(encryptedMnemonic, 'hex', 'utf8');

  decryptedMnemonic += decipher.final('utf8');

  return decryptedMnemonic;
}
