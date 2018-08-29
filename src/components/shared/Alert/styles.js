import styled from 'styled-components';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

export const Container = styled.View``;

export const Window = styled.View`
  background-color: ${colors.bgWhite};
  padding: 20px;
  border-radius: 3;
`;

export const Title = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.smallTitle};
  font-weight: bold;
`;

export const Text = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.normal};
  line-height: 22;
  margin-top: 20;
`;

export const Children = styled.View`
  margin-top: 20;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20;
`;

export const ButtonContainer = styled.View`
  margin-left: 30;
`;
