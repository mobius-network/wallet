import { randomBytes } from 'react-native-randombytes';
import DeviceInfo from 'react-native-device-info';
import jwt from 'jwt-simple';

import { JWT_SECRET_FUND_WALLET } from 'react-native-dotenv';

import { isDev } from './env';

const uniqueId = isDev
  ? `random-${randomBytes(20).toString('hex')}`
  : DeviceInfo.getUniqueID();

export function encodeFundToken(address) {
  const payload = {
    sub: address,
    jti: uniqueId,
  };

  return jwt.encode(payload, JWT_SECRET_FUND_WALLET, 'HS512');
}
