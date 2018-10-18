import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  colors,
  fonts,
  helpers,
  HeaderGradient,
} from 'components/shared/Styleguide';
import { TextInput } from 'react-native';

export const Gradient = styled(HeaderGradient)`
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
  padding-top: 16;
  width: ${helpers.vw};
`;

export const NavRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
  margin-left: 30;
`;

export const BackIcon = styled(Icon).attrs({
  name: 'close',
})`
  color: white;
  font-size: 26;
`;

export const BackButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})``;

export const SearchInput = styled(TextInput)``;

export const Amount = styled.Text`
  color: white;
  font-family: ${fonts.roboto.medium};
  font-size: 20;
  line-height: ${helpers.calculateLineHeight(20)};
`;

export const SubmitButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})`
  margin-left: 5;
`;

export const SubmitButtonContent = styled.Text`
  color: white;
  font-family: ${fonts.roboto.medium};
  font-size: 20;
  line-height: ${helpers.calculateLineHeight(20)};
`;

export const UsdAmount = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.bold};
  font-size: 14;
  opacity: 0.7;
`;
