import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Share, Clipboard } from 'react-native';
import ActionSheet from 'react-native-custom-actionsheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'components/shared/Styleguide';

import QrCode from 'components/shared/QrCode';

import {
  Container,
  Touchable,
  SelectorContainer,
  SelectorTitle,
  SelectedCurrency,
  ChevronIcon,
  Content,
  Title,
  SubTitle,
  ClipboardButton,
  ShareButton,
  KeyLabel,
  KeyValue,
  ButtonRow,
  ButtonTitle,
} from './styles';

class AddFunds extends Component {
  static propTypes = {
    publicKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
  };

  state = {
    selected: 1,
  };

  buttonTitle = ({ iconName, titlePath }) => (
    <Fragment>
      <Icon color={colors.textPrimary} name={iconName} size={18} />
      <ButtonTitle>{this.props.t(titlePath)}</ButtonTitle>
    </Fragment>
  );

  buttons = {
    copy: this.buttonTitle({
      iconName: 'content-copy',
      titlePath: 'addFunds.buttons.copy',
    }),
    share: this.buttonTitle({
      iconName: 'share',
      titlePath: 'addFunds.buttons.share',
    }),
  };

  options = [this.props.t('addFunds.selectWallet.cancel'), 'MOBI', 'XLM'];

  showActionSheet = () => this.actionSheet.show();

  setActionSheetRef = ref => (this.actionSheet = ref);

  copyToClipboard = () => {
    Clipboard.setString(this.props.publicKey);
  };

  shareAddress = () => {
    const { t, publicKey } = this.props;
    const { selected } = this.state;

    Share.share(
      {
        title: t('addFunds.share.title'),
        message: publicKey,
        url: QrCode.generatePayURI({
          destination: publicKey,
          asset: this.options[selected],
        }),
      },
      {
        subject: t('addFunds.share.subject'),
      }
    );
  };

  handlePress = index => this.setState({
    selected: index || this.state.selected,
  });

  render() {
    const { t, publicKey } = this.props;
    const { selected } = this.state;

    return (
      <Container>
        <Touchable onPress={this.showActionSheet}>
          <SelectorContainer>
            <SelectorTitle>{t('addFunds.selectWallet.label')}</SelectorTitle>
            <SelectedCurrency>{this.options[selected]}</SelectedCurrency>

            <ChevronIcon />
          </SelectorContainer>
        </Touchable>

        <Content>
          <Title>{t('addFunds.title')}</Title>
          <SubTitle>{t('addFunds.subtitle')}</SubTitle>

          <QrCode
            asset={this.options[selected]}
            destination={publicKey}
            size={192}
          />

          <KeyLabel>{t('addFunds.publicKey.title')}</KeyLabel>
          <KeyValue>
            {publicKey.slice(0, 11)}…{publicKey.slice(-11)}
          </KeyValue>

          <ButtonRow>
            <ClipboardButton
              onPress={this.copyToClipboard}
              title={this.buttons.copy}
              variant="secondary"
            />
            <ShareButton
              onPress={this.shareAddress}
              title={this.buttons.share}
              variant="secondary"
            />
          </ButtonRow>
        </Content>

        <ActionSheet
          ref={this.setActionSheetRef}
          cancelButtonIndex={0}
          destructiveButtonIndex={3}
          onPress={this.handlePress}
          options={this.options}
          title={t('addFunds.selectWallet.title')}
        />
      </Container>
    );
  }
}

export default AddFunds;
