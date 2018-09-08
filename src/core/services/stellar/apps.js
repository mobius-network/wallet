import { Keypair, Operation, TransactionBuilder } from 'stellar-sdk';
import { parseBalance, assets } from './balance';

export function createAppAccount(args) {
  const {
    masterSecretKey,
    appSecretKey,
    developerPublicKey,
    amount,
    account,
  } = args;

  const masterKeyPair = Keypair.fromSecret(masterSecretKey);
  const appKeyPair = Keypair.fromSecret(appSecretKey);

  const createAccountOp = Operation.createAccount({
    source: masterKeyPair.publicKey(),
    destination: appKeyPair.publicKey(),
    startingBalance: '3',
  });

  const changeTrustOp = Operation.changeTrust({
    source: appKeyPair.publicKey(),
    asset: assets.mobi,
  });

  const setSignerOp = Operation.setOptions({
    source: appKeyPair.publicKey(),
    signer: {
      ed25519PublicKey: developerPublicKey,
      weight: 1,
    },
  });

  const setWeightsOp = Operation.setOptions({
    source: appKeyPair.publicKey(),
    masterWeight: 10,
    highThreshold: 10,
    medThreshold: 1,
    lowThreshold: 1,
  });

  let transaction = new TransactionBuilder(account)
    .addOperation(createAccountOp)
    .addOperation(changeTrustOp);

  if (amount) {
    const paymentOp = Operation.payment({
      source: masterKeyPair.publicKey(),
      destination: appKeyPair.publicKey(),
      amount: amount.toString(),
      asset: assets.mobi,
    });

    transaction = transaction.addOperation(paymentOp);
  }

  transaction = transaction
    .addOperation(setSignerOp)
    .addOperation(setWeightsOp)
    .build();

  transaction.sign(masterKeyPair);
  transaction.sign(appKeyPair);

  return transaction;
}

export function mergeAppAccount(args) {
  const {
    appAccount,
    appSecretKey,
    masterAccountPublicKey,
  } = args;

  const appKeyPair = Keypair.fromSecret(appSecretKey);
  const accountMergeOp = Operation.accountMerge({
    destination: masterAccountPublicKey,
  });

  const changeTrustOp = Operation.changeTrust({
    asset: assets.mobi,
    limit: '0',
  });

  let transaction = new TransactionBuilder(appAccount);

  const balances = parseBalance(appAccount);
  const mobiAmount = parseFloat(balances.mobi.balance);

  if (mobiAmount > 0) {
    const paymentReturnOp = Operation.payment({
      destination: masterAccountPublicKey,
      amount: balances.mobi.balance,
      asset: assets.mobi,
    });

    transaction = transaction.addOperation(paymentReturnOp);
  }

  transaction = transaction
    .addOperation(changeTrustOp)
    .addOperation(accountMergeOp)
    .build();

  transaction.sign(appKeyPair);

  return transaction;
}
