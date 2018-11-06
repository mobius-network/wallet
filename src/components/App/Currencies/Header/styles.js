import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { helpers, HeaderGradient } from 'components/shared/Styleguide';

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
