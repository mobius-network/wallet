import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {
  colors, fonts, fontSizes, radius,
} from 'components/shared/Styleguide';

const variants = {
  primary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: colors.textWhite,
    fontWeight: 700,
  },
  secondary: {
    backgroundColor: colors.bgWhite,
    borderColor: colors.border,
    borderWidth: 1,
    color: colors.textPrimary,
    fontWeight: 400,
  },
  text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: colors.textPrimary,
    fontWeight: 400,
  },
};

export const Container = styled.View`
  background-color: ${({ theme }) => variants[theme.variant].backgroundColor};
  border-color: ${({ theme }) => variants[theme.variant].borderColor};
  border-radius: ${({ theme }) => (theme.square ? 0 : radius.button)};
  border-style: solid;
  border-width: ${({ theme }) => variants[theme.variant].borderWidth};
  margin-bottom: 2;
  margin-top: 2;
`;

export const Content = styled.View`
  align-items: center;
  border-radius: ${({ theme }) => (theme.square ? 0 : radius.button)};
  flex-direction: row;
  height: 40;
  justify-content: center;
  padding-left: ${({ theme }) => (theme.padding ? 30 : 0)};
  padding-right: ${({ theme }) => (theme.padding ? 30 : 0)};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#4637E6', '#8C2DFD'],
  end: { x: 1, y: 1 },
  start: { x: 0, y: 1 },
})`
  border-radius: ${({ theme }) => (theme.square ? 0 : radius.button)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => variants[theme.variant].color};
  font-family: ${fonts.nunitoSans.bold};
  font-size: ${fontSizes.normal};
  font-weight: ${({ theme }) => variants[theme.variant].fontWeight};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const shadow = {
  shadowOpacity: 0.3,
  shadowRadius: 10,
  shadowColor: '#000000',
  shadowOffset: { height: 3, width: 0 },
};
