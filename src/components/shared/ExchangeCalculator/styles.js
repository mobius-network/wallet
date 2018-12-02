import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fontSizes, fonts, helpers } from 'components/shared/Styleguide';

const Fields = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 0 0;
  border-radius: 25px;
  border: 1px solid #2d76fd;
  background: transparent;
  text-align: center;
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: ${helpers.calculateLineHeight(fontSizes.small)};
  &::placeholder {
    color: white;
    text-align: center;
  }
`;

const Token = styled.TouchableOpacity`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 100%;
`;

export const Amount = styled.TextInput`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #2d76fd;
  width: 95%;
  background: transparent;
  text-align: center;
  &::placeholder {
    color: darkblue;
    text-align: center;
  }
`;

export const BaseToken = styled(Token)`
  align-self: center;
  border: 2px solid #2d76fd;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  width: 60px;
`;

export const BaseWrapper = styled(Fields)`
  align-self: center;
  flex-basis: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -32.5%;
  padding-left: 21px;
  width: 62.5%;
`;

export const Border = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  border: 2px solid #cbb8ff;
  border-left-width: 0;
  border-right-width: 0;
  height: 300px;
  width: 200px;
  background: transparent;
`;

export const Button = styled.View`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CounterToken = styled(Token)`
  align-self: center;
  border: 2px solid #2d76fd;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  width: 60px;
`;

export const CounterWrapper = styled(Fields)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: -30%;
  padding-right: 20px;
  height: 100%;
  width: 62.5%;
`;

export const Container = styled.View`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 95%;
  width: 100%;
`;

export const DefaultIcon = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -5px;
  height: 20px;
  width: 20px;
`;

export const Result = styled(Fields)`
  flex-basis: 15%;
  width: 95%;
`;

export const Text = styled.Text`
  text-align: center;
`;

export const TokenIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin: -3px 0 3px -2px;
`;

export const Wrapper = styled.View`
  align-self: center;
  flex-basis: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
