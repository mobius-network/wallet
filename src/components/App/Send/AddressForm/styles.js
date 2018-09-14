import styled from 'styled-components';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, helpers } from 'components/shared/Styleguide';

export const Container = styled.View`
  background-color: ${colors.bgLight};
  flex-direction: column;
  flex: 1;
`;

export const ScanIcon = styled(CommunityIcon).attrs({
  name: 'qrcode-scan',
})`
  color: ${colors.textPrimary};
  font-size: 26;
`;

export const ScanButton = styled.TouchableHighlight`
  position: absolute;
  top: 28;
  right: 16;
`;

export const QRCameraStyles = {
  height: helpers.vw,
};
