import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Share, Clipboard } from 'react-native';
import ActionSheet from 'react-native-custom-actionsheet';

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
} from './styles';

class AddFunds extends Component {
  static propTypes = {
    publicKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
  };

  state = {
    selected: 1,
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

  handlePress = index =>
    this.setState({
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
            <SelectedCurrency>
              {this.options[selected].toUpperCase()}
            </SelectedCurrency>

            <ChevronIcon />
          </SelectorContainer>
        </Touchable>

        <Content>
          <Title>{t('addFunds.title')}</Title>
          <SubTitle>{t('addFunds.subtitle')}</SubTitle>

          <QrCode
            size={192}
            asset={this.options[selected]}
            destination={publicKey}
          />

          <KeyLabel>{t('addFunds.publicKey.title').toUpperCase()}</KeyLabel>
          <KeyValue>
            {publicKey.slice(0, 11)}…{publicKey.slice(-11)}
          </KeyValue>

          <ButtonRow>
            <ClipboardButton onPress={this.copyToClipboard} />
            <ShareButton onPress={this.shareAddress} />
          </ButtonRow>
        </Content>

        <ActionSheet
          ref={this.setActionSheetRef}
          title={t('addFunds.selectWallet.title')}
          options={this.options}
          cancelButtonIndex={0}
          destructiveButtonIndex={3}
          onPress={this.handlePress}
        />
      </Container>
    );
  }
}

export default AddFunds;
