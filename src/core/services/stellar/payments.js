import { stellarServer } from './server';

export async function fetchPayments(pubKey) {
  const payments = await stellarServer
    .payments()
    .forAccount(pubKey)
    .limit(100)
    .order('desc')
    .call();

  return payments;
}
