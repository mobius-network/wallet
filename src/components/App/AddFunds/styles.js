import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from 'components/shared/Button';
import { colors, fonts } from 'components/shared/Styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgLight};
`;

export const Touchable = styled.TouchableHighlight``;

export const SelectorContainer = styled.View`
  position: relative;
  padding-top: 18;
  padding-left: 17;
  padding-right: 17;
  padding-bottom: 18;
  border-bottom-width: 1;
  border-color: ${colors.borderColor};
  background-color: #fafafa;
`;

export const SelectorTitle = styled.Text`
  color: ${colors.textPrimary};
  font-family: ${fonts.roboto.medium};
  font-size: 13;
  line-height: 14;
  margin-bottom: 6;
`;

export const SelectedCurrency = styled.Text`
  color: black;
  font-family: ${fonts.roboto.regular};
  font-size: 15;
  line-height: 14;
  text-transform: uppercase;
`;

export const ChevronIcon = styled(Icon).attrs({
  name: 'arrow-drop-down',
})`
  position: absolute;
  right: 17;
  top: 27;
  color: ${colors.darkBlue};
  font-size: 20;
`;

export const Content = styled.View`
  flex-grow: 1;
  padding-top: 17;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: black;
  font-family: ${fonts.roboto.medium};
  font-size: 20;
  line-height: 21;
  align-self: flex-start;
`;

export const SubTitle = styled.Text`
  color: #828282;
  font-family: ${fonts.roboto.regular};
  font-size: 14;
  line-height: 20;
  margin-bottom: 19;
  align-self: flex-start;
`;

export const ButtonTitle = styled.Text`
  color: #828282;
  font-family: ${fonts.roboto.regular};
  font-size: 15;
  line-height: 20;
  margin-bottom: 19;
`;

export const ClipboardButton = styled(Button).attrs({
  variant: 'secondary',
  title: (
    <Fragment>
      <Icon name="content-copy" />
      <ButtonTitle>Copy</ButtonTitle>
    </Fragment>
  ),
})``;

export const ShareButton = styled(Button).attrs({
  variant: 'secondary',
  title: (
    <Fragment>
      <Icon name="share" />
      <ButtonTitle>Share</ButtonTitle>
    </Fragment>
  ),
})``;

export const KeyLabel = styled.Text`
  color: ${colors.darkPurple};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: 14;
  line-height: 14;
  margin-top: 16;
  opacity: 0.5;
  text-transform: uppercase;
`;

export const KeyValue = styled.Text`
  color: ${colors.darkPurple};
  font-family: ${fonts.helveticaNeue.regular};
  font-size: 15;
  line-height: 15;
  margin-bottom: 24;
  opacity: 0.9;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  margin-bottom: 28;
`;
