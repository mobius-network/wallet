import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { helpers, fonts, HeaderGradient } from 'components/shared/Styleguide';

export const Gradient = styled(HeaderGradient)`
  display: flex;
  width: ${helpers.vw};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 56;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${fonts.roboto.medium};
  font-size: 20;
  line-height: 24;
  margin-left: 30;
`;

export const BackIcon = styled(Icon).attrs({
  name: 'arrow-back',
})`
  color: white;
  font-size: 26;
`;

export const BackButton = styled.TouchableHighlight`
  margin-left: 20;
`;
