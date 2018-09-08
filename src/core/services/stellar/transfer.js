import { Operation } from 'stellar-sdk';
import { assets } from './balance';
import { stellarServer } from './server';

export async function findBestPath(opts) {
  const {
    source,
    destination,
    destinationAsset,
    destinationAmount,
    limit = 5,
  } = opts;

  const { records } = await stellarServer
    .paths(source, destination, destinationAsset, destinationAmount)
    .limit(limit)
    .call();

  const sortedByPrice = records.sort((a, b) =>
    a.source_amount - b.source_amount);

  return sortedByPrice[0] || 0;
}

export function pathPayment(opts) {
  const {
    sendAsset = assets.native,
    sendMax = String(Number.MAX_SAFE_INTEGER / 10000000),
    path = [],
    source,
    ...rest
  } = opts;

  return Operation.pathPayment({
    sendAsset,
    sendMax,
    path,
    source,
    ...rest,
  });
}
