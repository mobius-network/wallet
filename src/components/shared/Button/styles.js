import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';

import {
  colors,
  fonts,
  fontSizes,
  radius,
  shadows,
} from 'components/shared/Styleguide';

const variants = {
  primary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    boxShadow: shadows.buttonPrimary,
    color: colors.textWhite,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  secondary: {
    backgroundColor: colors.bgWhite,
    borderColor: colors.border,
    borderWidth: 1,
    boxShadow: shadows.buttonSecondary,
    color: colors.textPrimary,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    boxShadow: 0,
    color: colors.textPrimary,
    fontWeight: 400,
    textTransform: 'none',
  },
};

export const Container = styled.View`
  background-color: ${({ theme }) => variants[theme.variant].backgroundColor};
  border-color: ${({ theme }) => variants[theme.variant].borderColor};
  border-radius: ${({ theme }) => (theme.square ? 0 : radius.button)};
  border-style: solid;
  border-width: ${({ theme }) => variants[theme.variant].borderWidth};
  box-shadow: ${shadows.button};
  margin-bottom: 2;
  margin-top: 2;
  overflow: hidden;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  height: 40;
  justify-content: center;
  padding-left: 30;
  padding-right: 30;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#4637E6', '#8C2DFD'],
  end: { x: 1, y: 1 },
  start: { x: 0, y: 1 },
})``;

export const Title = styled.Text`
  color: ${({ theme }) => variants[theme.variant].color};
  font-family: ${fonts.nunitoSans.bold};
  font-size: ${fontSizes.button};
  font-weight: ${({ theme }) => variants[theme.variant].fontWeight};
  text-transform: ${({ theme }) => variants[theme.variant].textTransform};
`;
