import StellarHDWallet from 'stellar-hd-wallet';
import scrypt from 'scrypt-async';
import nacl from 'tweetnacl';
import base64js from 'base64-js';

export function encrypt(password, mnemonic) {
  return new Promise((resolve) => {
    const wallet = StellarHDWallet.fromMnemonic(mnemonic);
    const seedHex = Buffer.from(wallet.seedHex);
    const nonce = nacl.randomBytes(24);
    const salt = nacl.randomBytes(64);
    const scryptOptions = {
      N: 16384,
      r: 8,
      p: 1,
      dkLen: 32,
      encoding: 'binary',
    };

    scrypt(password, salt, scryptOptions, key => {
      const cipher = nacl.secretbox(seedHex, nonce, key);
      const keystore = {
        version: 'mobius-wallet-1.0',
        crypto: {
          salt: base64js.fromByteArray(salt),
          nonce: base64js.fromByteArray(nonce),
          cipher: base64js.fromByteArray(cipher),
          scryptOptions,
        },
      };

      resolve({ keystore, wallet });
    });
  });
}
