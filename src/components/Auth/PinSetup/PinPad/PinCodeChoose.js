import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import PinCode, { PinStatus } from './PinCode';

/**
 * Pin Code Choose PIN Page
 */

class PinCodeChoose extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { status: PinStatus.choose, pinCode: '' };
    this.endProcessCreation = this.endProcessCreation.bind(this);
    this.endProcessConfirm = this.endProcessConfirm.bind(this);
  }

  endProcessCreation = pinCode => {
    this.setState({ pinCode, status: PinStatus.confirm });
  };

  endProcessConfirm = async pinCode => {
    if (pinCode === this.state.pinCode) {
      if (this.props.storePin) {
        this.props.storePin(pinCode);
      } else {
        await Keychain.setGenericPassword(
          this.props.pinCodeKeychainName,
          pinCode
        );
      }
      if (this.props.finishProcess) this.props.finishProcess();
    } else {
      this.setState({ status: PinStatus.choose });
    }
  };

  cancelConfirm = () => {
    this.setState({ status: PinStatus.choose });
  };

  render() {
    return (
      <View
        style={
          this.props.styleContainer
            ? this.props.styleContainer
            : styles.container
        }
      >
        {this.state.status === PinStatus.choose && (
          <PinCode
            endProcess={this.endProcessCreation}
            sentenceTitle={this.props.titleChoose}
            status={PinStatus.choose}
            subtitle={this.props.subtitleChoose}
            buttonNumberComponent={this.props.buttonNumberComponent || null}
            passwordLength={this.props.passwordLength || 4}
            passwordComponent={this.props.passwordComponent || null}
            titleAttemptFailed={
              this.props.titleAttemptFailed || 'Incorrect PIN Code'
            }
            titleConfirmFailed={
              this.props.titleConfirmFailed || 'Your entries did not match'
            }
            subtitleError={this.props.subtitleError || 'Please try again'}
            colorPassword={this.props.colorPassword || undefined}
            colorPasswordError={this.props.colorPasswordError || undefined}
            numbersButtonOverlayColor={
              this.props.numbersButtonOverlayColor || undefined
            }
            buttonDeleteComponent={this.props.buttonDeleteComponent || null}
            titleComponent={this.props.titleComponent || null}
            subtitleComponent={this.props.subtitleComponent || null}
            styleButtonCircle={this.props.styleButtonCircle}
            iconButtonDeleteDisabled={this.props.iconButtonDeleteDisabled}
            styleTextButton={this.props.styleTextButton}
            styleCircleHiddenPassword={this.props.styleCircleHiddenPassword}
            styleRowButtons={this.props.styleRowButtons}
            buttonDeleteText={this.props.buttonDeleteText}
            styleColumnButtons={this.props.styleColumnButtons}
            styleEmptyColumn={this.props.styleEmptyColumn}
            styleViewTitle={this.props.styleViewTitle}
            styleTextTitle={this.props.styleTextTitle}
            styleTextSubtitle={this.props.styleTextSubtitle}
            styleContainer={this.props.styleContainerPinCode}
            styleColumnDeleteButton={this.props.styleColumnDeleteButton}
            styleDeleteButtonColorShowUnderlay={
              this.props.styleDeleteButtonColorShowUnderlay
            }
            styleDeleteButtonColorHideUnderlay={
              this.props.styleDeleteButtonColorHideUnderlay
            }
            styleColorTitle={this.props.styleColorTitle}
            styleColorTitleError={this.props.styleColorTitleError}
            styleColorSubtitle={this.props.styleColorSubtitle}
            styleColorSubtitleError={this.props.styleColorSubtitleError}
            styleDeleteButtonIcon={this.props.styleDeleteButtonIcon}
            styleDeleteButtonSize={this.props.styleDeleteButtonSize}
            styleDeleteButtonText={this.props.styleDeleteButtonText}
            styleColorButtonTitle={this.props.styleColorButtonTitle}
          />
        )}
        {this.state.status === PinStatus.confirm && (
          <PinCode
            endProcess={this.endProcessConfirm}
            sentenceTitle={this.props.titleConfirm}
            status={PinStatus.confirm}
            cancelFunction={this.cancelConfirm}
            subtitle={this.props.subtitleConfirm}
            previousPin={this.state.pinCode}
            buttonNumberComponent={this.props.buttonNumberComponent || null}
            passwordLength={this.props.passwordLength || 4}
            passwordComponent={this.props.passwordComponent || null}
            titleAttemptFailed={
              this.props.titleAttemptFailed || 'Incorrect PIN Code'
            }
            titleConfirmFailed={
              this.props.titleConfirmFailed || 'Your entries did not match'
            }
            subtitleError={this.props.subtitleError || 'Please try again'}
            colorPassword={this.props.colorPassword || undefined}
            colorPasswordError={this.props.colorPasswordError || undefined}
            numbersButtonOverlayColor={
              this.props.numbersButtonOverlayColor || undefined
            }
            buttonDeleteComponent={this.props.buttonDeleteComponent || null}
            buttonDeleteText={this.props.buttonDeleteText}
            titleComponent={this.props.titleComponent || null}
            subtitleComponent={this.props.subtitleComponent || null}
            styleButtonCircle={this.props.styleButtonCircle}
            styleTextButton={this.props.styleTextButton}
            styleCircleHiddenPassword={this.props.styleCircleHiddenPassword}
            iconButtonDeleteDisabled={this.props.iconButtonDeleteDisabled}
            styleRowButtons={this.props.styleRowButtons}
            styleColumnButtons={this.props.styleColumnButtons}
            styleEmptyColumn={this.props.styleEmptyColumn}
            styleViewTitle={this.props.styleViewTitle}
            styleTextTitle={this.props.styleTextTitle}
            styleTextSubtitle={this.props.styleTextSubtitle}
            styleColorTitle={this.props.styleColorTitle}
            styleColorTitleError={this.props.styleColorTitleError}
            styleColorSubtitle={this.props.styleColorSubtitle}
            styleColorSubtitleError={this.props.styleColorSubtitleError}
            styleContainer={this.props.styleContainerPinCode}
            styleColumnDeleteButton={this.props.styleColumnDeleteButton}
            styleDeleteButtonColorShowUnderlay={
              this.props.styleDeleteButtonColorShowUnderlay
            }
            styleDeleteButtonColorHideUnderlay={
              this.props.styleDeleteButtonColorHideUnderlay
            }
            styleDeleteButtonIcon={this.props.styleDeleteButtonIcon}
            styleDeleteButtonSize={this.props.styleDeleteButtonSize}
            styleDeleteButtonText={this.props.styleDeleteButtonText}
            styleColorButtonTitle={this.props.styleColorButtonTitle}
            styleColorButtonTitleSelected={
              this.props.styleColorButtonTitleSelected
            }
          />
        )}
      </View>
    );
  }
}

export default PinCodeChoose;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
