import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderGradient = styled(LinearGradient).attrs({
  colors: ['#37BDE6', '#2D76FD'],
  end: { x: 1, y: 1.0 },
  locations: [0, 1],
  start: { x: 0.0, y: 0.9 },
})``;
