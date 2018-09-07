import { Server, Network } from 'stellar-sdk';

if (process.env.STELLAR_TESTNET === 'true') {
  Network.useTestNetwork();
} else {
  Network.usePublicNetwork();
}

export const stellarServer = new Server(process.env.STELLAR_HORIZON_URL);

export const submitTransaction = (...args) => stellarServer.submitTransaction(...args);
