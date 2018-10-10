import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const Icon = styled.ActivityIndicator.attrs({
  color: colors.textPrimary,
  size: 'large',
})``;
