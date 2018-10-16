import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { fonts, helpers, HeaderGradient } from 'components/shared/Styleguide';

export const Gradient = styled(HeaderGradient)`
  width: ${helpers.vw};
`;

export const NavRow = styled.View`
  align-items: center;
  flex-direction: row;
  height: 56;
  justify-content: flex-start;
  padding-left: 16;
  padding-right: 16;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${fonts.roboto.medium};
  font-size: 20;
  line-height: ${helpers.calculateLineHeight(20)};
  margin-left: 30;
`;

export const BackIcon = styled(Icon).attrs({
  name: 'arrow-back',
})`
  color: white;
  font-size: 26;
`;

export const BackButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})``;

export const Container = styled.View`
  padding-bottom: 40;
  padding-top: 20;
`;
