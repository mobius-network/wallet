import styled from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { colors, helpers } from 'components/shared/Styleguide';

export const Container = styled.View`
  background-color: ${colors.bgLight};
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.View`
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

export const BackIcon = styled(MaterialIcon).attrs({
  name: 'arrow-back',
})`
  color: ${colors.textPrimary};
  font-size: 26;
`;

export const BackButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})``;

export const TitleContainer = styled.View`
  margin-bottom: 16;
  padding-left: 36;
  padding-right: 36;
`;

export const InfoIcon = styled(FontAwesomeIcon).attrs({
  name: 'question-circle',
})`
  color: ${colors.textPrimary};
  font-size: 26;
`;

export const InfoButton = styled.TouchableHighlight`
  position: absolute;
  top: 28;
  right: 16;
`;

export const ButtonRow = styled.View`
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
  padding-top: 16;
`;
