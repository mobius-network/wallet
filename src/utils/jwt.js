import DeviceInfo from 'react-native-device-info';
import jwt from 'jwt-simple';

const deviceId = DeviceInfo.getDeviceId();
const secret = 'hardcoded';

export function encodeFundToken(address) {
  const payload = {
    sub: address,
    jti: deviceId,
  };

  return jwt.encode(payload, secret);
}
