import styled from 'styled-components';

import Button from 'components/shared/Button';

export const FloatingButtonPosition = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50;
  right: 10;
`;

export const FloatingButton = styled(Button).attrs({
  square: false,
})`
  flex-grow: 1;
  margin-bottom: 0;
  margin-top: 0;
`;
