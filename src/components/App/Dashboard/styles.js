import styled from 'styled-components';

import Button from 'components/shared/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, helpers, HeaderGradient } from 'components/shared/Styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgLight};
`;

export const ButtonRow = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled(Button).attrs({
  square: true,
})`
  flex-grow: 1;
  margin-bottom: 0;
  margin-top: 0;
`;

export const Gradient = styled(HeaderGradient)`
  ${helpers.centerContentFlex};
  display: flex;
  height: 163;
  width: ${helpers.vw};
`;

export const Menu = styled.TouchableOpacity`
  position: absolute;
  left: 16;
  top: 16;
`;

export const MenuIcon = styled(Icon).attrs({
  name: 'menu',
})`
  color: white;
  font-size: 26;
`;
