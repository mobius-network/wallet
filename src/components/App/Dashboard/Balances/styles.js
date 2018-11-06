import styled from 'styled-components';
import { FlatList } from 'react-native';

export const Container = {
  marginTop: 25,
  alignSelf: 'stretch',
  flexGrow: 1,
};

export const BalancesList = styled(FlatList)`
  padding-top: 16px;
`;
