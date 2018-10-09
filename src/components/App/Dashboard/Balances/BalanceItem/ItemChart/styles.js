import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const Container = styled.View`
  margin-bottom: 10;
  padding-bottom: 15;
  width: 100%;
  border-bottom-width: 1;
  border-color: rgba(178, 190, 195, 0.4);
  align-items: center;
`;

export const LoadingIconView = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: colors.textPrimary,
  size: 'large',
})``;
