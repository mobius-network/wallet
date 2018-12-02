import styled from 'styled-components';

export const Container = styled.View`
  z-index: 1;
  position: absolute;
  left: -20%;
  bottom: 200%;
  margin-left: -80px;
  padding: 5px 10px;
  border-radius: 8px;
  height: 100px;
  width: 200px;
  border: 1px solid #56adf4;
  color: #555;
  background-color: white;
  text-align: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const HorizontalList = styled.ScrollView.attrs({
  horizontal: true,
  keyboardShouldPersistTaps: 'handled',
})`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 90%;
  text-align: center;
  overflow: hidden;
`;

export const Search = styled.TextInput`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #555;
  width: 90%;
  background: transparent;
  font-size: 16px;
  text-align: center;
`;

export const Text = styled.TouchableOpacity`
  text-align: center;
`;

export const TokenIcon = styled.Image`
  margin: 0 5px;
  height: 40px;
  width: 40px;
`;

export const Token = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top -5px;
`;

export const View = styled.View`
  position: relative;
  margin-bottom: -5px;
`;
