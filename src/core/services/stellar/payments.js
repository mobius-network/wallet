import { stellarServer } from './server';

export async function fetchPayments(pubKey) {
  const payments = await stellarServer
    .payments()
    .forAccount(pubKey)
    .call();

  return payments;
}
