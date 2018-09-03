import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const Content = styled.View`
  align-items: stretch;
  flex-direction: column;
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

export const FakeButton = styled.View`
  width: 100%;
  height: 40;
  margin-bottom: 2;
  margin-top: 2;
`;
