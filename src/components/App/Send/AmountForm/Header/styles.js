import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  colors,
  fonts,
  helpers,
  HeaderGradient,
} from 'components/shared/Styleguide';

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
  height: 56;
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
  padding-bottom: 20;
  padding-top: 20;
`;

export const Decorator = styled.View`
  flex-direction: column;
  height: 82;
  justify-content: center;
  width: 38;
  align-items: center;
  position: absolute;
  left: 0;
  top: 32;
`;

export const DecoratorBefore = styled.View`
  border-color: #76ccec;
  border-left-width: 1;
  border-top-width: 1;
  height: 22;
  margin-left: 10;
  width: 10;
`;

export const DecoratorIcon = styled(Icon).attrs({
  name: 'shuffle',
})`
  border-color: #76ccec;
  border-radius: 19;
  border-width: 1;
  color: #fafafa;
  font-size: 20;
  height: 38;
  line-height: 38;
  text-align: center;
  width: 38;
`;

export const DecoratorAfter = styled.View`
  border-bottom-width: 1;
  border-color: #76ccec;
  border-left-width: 1;
  height: 22;
  margin-left: 10;
  width: 10;
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
  font-family: ${fonts.roboto.bold};
  color: ${colors.textWhite};
  font-size: 14;
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
