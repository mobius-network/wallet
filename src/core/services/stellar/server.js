import { Server, Network } from 'stellar-sdk';
import { stellarTestnet, stellarHorizonUrl} from 'utils/env';

if (stellarTestnet) {
  Network.useTestNetwork();
} else {
  Network.usePublicNetwork();
}

export const stellarServer = new Server(stellarHorizonUrl);

export const submitTransaction = (...args) => stellarServer.submitTransaction(...args);
