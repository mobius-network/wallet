import styled from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const dotStyles = {
  borderRadius: 10,
  height: 20,
  marginLeft: 9,
  marginRight: 9,
  width: 20,
};

export const Container = styled.View`
  flex: 2;
`;

export const Content = styled.View`
  align-items: center;
  flex: 2;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const TextContainer = styled.View`
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  margin-left: 24;
  margin-right: 24;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  flex-shrink: 0;
  width: ${helpers.vw - 48};
`;

export const Title = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.secondaryTitle};
  text-align: center;
  color: ${props => (props.showError ? colors.error : colors.textDefault)};
`;

export const Subtitle = styled.Text`
  font-size: ${fontSizes.default};
  line-height: ${helpers.calculateLineHeight(fontSizes.default)};
  padding-top: 10;
  position: absolute;
  text-align: center;
  top: 100%;
  width: ${helpers.vw - 48};
  color: ${props => (props.showError ? colors.error : colors.textSecondary)};
`;

export const DotsContainer = styled.View`
  align-items: flex-start;
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const Dot = styled.View`
  border-radius: 10;
  height: 20;
  margin-left: 9;
  margin-right: 9;
  width: 20;
`;

export const Head = styled.View`
  padding-top: 16;
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
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

export const StyledDot = styled.View`
  border-radius: 10;
  height: 20;
  margin-left: 9;
  margin-right: 9;
  width: 20;
  border-color: ${props => (props.showError ? colors.error : '#BEBEBE')};
  border-width: 1;
`;
