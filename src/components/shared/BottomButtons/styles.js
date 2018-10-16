import styled from 'styled-components';

import Button from 'components/shared/Button';

export const ButtonRow = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled(Button).attrs({
  square: true,
})`
  flex-grow: 1;
  margin-bottom: 0;
  margin-top: 0;
`;
