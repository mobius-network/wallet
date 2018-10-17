import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  colors,
  fonts,
  fontSizes,
  radius,
  ui,
  gradients,
} from 'components/shared/Styleguide';

const variants = {
  primary: {
    gradient: gradients.actionButton,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: colors.textWhite,
    fontWeight: 700,
    fontSize: fontSizes.normal,
  },
  secondary: {
    gradient: gradients.actionButton,
    backgroundColor: colors.bgWhite,
    borderColor: colors.border,
    borderWidth: 1,
    color: colors.textPrimary,
    fontWeight: 400,
    fontSize: fontSizes.normal,
  },
  text: {
    gradient: gradients.actionButton,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: colors.textPrimary,
    fontWeight: 400,
    fontSize: fontSizes.normal,
  },
  floatingButton: {
    gradient: gradients.floatButton,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: colors.textWhite,
    fontWeight: 700,
    fontSize: fontSizes.floatingButton,
  },
};

const shapes = {
  square: {
    borderRadius: 0,
    height: 40,
    width: 'auto',
  },
  circle: {
    borderRadius: ui.floatButtonSize,
    width: ui.floatButtonSize,
    height: ui.floatButtonSize,
  },
  rounded: {
    borderRadius: radius.button,
    height: 40,
    width: 'auto',
  },
};

export const Container = styled.View`
  background-color: ${({ theme }) => variants[theme.variant].backgroundColor};
  border-color: ${({ theme }) => variants[theme.variant].borderColor};
  border-radius: ${({ theme }) => shapes[theme.shape].borderRadius};
  border-style: solid;
  border-width: ${({ theme }) => variants[theme.variant].borderWidth};
  margin-bottom: 2;
  margin-top: 2;
`;

export const Content = styled.View`
  align-items: center;
  text-align: center;
  border-radius: ${({ theme }) => shapes[theme.shape].borderRadius};
  flex-direction: row;
  width: ${({ theme }) => shapes[theme.shape].width};
  height: ${({ theme }) => shapes[theme.shape].height};
  justify-content: center;
  padding-left: ${({ theme }) => (theme.padding ? 30 : 0)};
  padding-right: ${({ theme }) => (theme.padding ? 30 : 0)};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ({ theme }) => variants[theme.variant].gradient,
  end: { x: 1, y: 1 },
  start: { x: 0, y: 1 },
})`
  border-radius: ${({ theme }) => shapes[theme.shape].borderRadius};
  width: ${({ theme }) => shapes[theme.shape].width};
  height: ${({ theme }) => shapes[theme.shape].height};
`;

export const Title = styled.Text`
  color: ${({ theme }) => variants[theme.variant].color};
  font-family: ${fonts.nunitoSans.bold};
  font-size: ${({ theme }) => variants[theme.variant].fontSize};
  font-weight: ${({ theme }) => variants[theme.variant].fontWeight};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const shadow = {
  shadowOpacity: 0.3,
  shadowRadius: 10,
  shadowColor: '#000000',
  shadowOffset: { height: 3, width: 0 },
};

export const PlusIcon = styled(Icon).attrs({
  name: 'plus',
})`
  color: white;
  font-size: 30;
`;
