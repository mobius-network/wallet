import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const Container = styled.View`
  background-color: ${colors.bgLight};
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const KeyboardContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.View`
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
`;
