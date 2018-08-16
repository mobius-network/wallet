import crypto from 'crypto';

export async function encrypt(password, mnemonic) {
  const cipher = crypto.createCipher('aes192', password);
  let encryptedMnemonic = cipher.update(mnemonic, 'utf8', 'hex');
  encryptedMnemonic += cipher.final('hex');

  return encryptedMnemonic;
}
