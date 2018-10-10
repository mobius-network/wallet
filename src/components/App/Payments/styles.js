import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgLight};
`;

export const ScrollView = styled.ScrollView``;

export const ItemContainer = styled.View`
  border-bottom-width: 1;
  border-color: ${colors.border};
`;
