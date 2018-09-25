import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  colors,
  fonts,
  helpers,
  HeaderGradient,
} from 'components/shared/Styleguide';

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

export const Content = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-left: 16;
  padding-right: 16;
`;

export const AmountContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-left: 40;
`;

export const Amount = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.regular};
  font-size: 74;
  line-height: ${helpers.calculateLineHeight(74, 1)};
`;

export const AssetButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})`
  margin-left: 5;
`;

export const AssetButtonContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Asset = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.bold};
  font-size: 14;
  line-height: ${helpers.calculateLineHeight(14, 1)};
`;

export const AssetIcon = styled(Icon).attrs({
  name: 'arrow-drop-down',
})`
  color: ${colors.textWhite};
  font-size: 14;
`;

export const UsdAmount = styled.Text`
  text-align: center;
  color: ${colors.darkBlue};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: 14;
`;
