import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import TextInput from 'components/shared/TextInput';

import { colors } from 'components/shared/Styleguide';

export const BackIcon = styled(Icon).attrs({
  name: 'arrow-back',
})`
  color: white;
  font-size: 26;
`;

export const BackButton = styled.TouchableHighlight`
  margin-left: 20;
`;

export const TitleContainer = styled.View`
  flex-grow: 1;
  flex-direction: row;
`;

export const TitleAmount = styled.Text``;

export const TitleUsd = styled.Text``;

export const SubmitButton = styled.Text`
  margin-right: 20;
`;

export const Container = styled.View``;

export const Title = styled.Text``;

export const FormFields = styled.View``;

export const Input = styled(TextInput)``;

export const ScanIcon = styled(CommunityIcon).attrs({
  name: 'qrcode-scan',
})`
  color: ${colors.textPrimary};
  font-size: 26;
`;

export const ScanButton = styled.TouchableHighlight`
  position: absolute;
  top: 5;
  right: 10;
`;
