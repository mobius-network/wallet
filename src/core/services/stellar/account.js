import { TransactionBuilder } from 'stellar-sdk';
import { stellarServer } from './server';

export async function safeLoadAccount(pubKey) {
  try {
    const account = await stellarServer.loadAccount(pubKey);

    return account;
  } catch (err) {
    if (err.name === 'NotFoundError') {
      return null;
    }

    throw err;
  }
}

export function submitOperation(operation, account, keypair) {
  const transaction = new TransactionBuilder(account)
    .addOperation(operation)
    .build();

  transaction.sign(keypair);

  return stellarServer.submitTransaction(transaction);
}
