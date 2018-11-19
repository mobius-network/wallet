import { stellarServer } from './server';

export async function fetchPayments(pubKey, cursorId) {
  const payments = await stellarServer
    .payments()
    .forAccount(pubKey)
    .cursor(cursorId)
    .limit(10)
    .order('desc')
    .call();

  return payments;
}
