import DeviceInfo from 'react-native-device-info';
import jwt from 'react-native-jwt';

const deviceId = DeviceInfo.getDeviceId();
const secret = 'hardcoded';

export default function encodeFundToken(address) {
  const payload = {
    sub: address,
    jti: deviceId,
  };

  return jwt.encode(payload, secret);
}
