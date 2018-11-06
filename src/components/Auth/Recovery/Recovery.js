import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Text } from 'react-native';
import { Field } from 'redux-form';
import { hasError } from 'revalidate/assertions';

import AlertShared from 'components/shared/Alert';
import SimpleInfo from 'components/shared/SimpleInfo';
import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

import { validate } from './validate';
import {
  Container,
  NavRow,
  BackButton,
  BackIcon,
  Header,
  TitleContainer,
  InfoButton,
  InfoIcon,
  ButtonRow,
} from './styles';

class Recovery extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    mnemonic: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  state = {
    isInfoAlertVisible: false,
    isValidationAlertVisible: false,
    validation: {},
  };

  toggleInfoAlert = () => this.setState({ isInfoAlertVisible: !this.state.isInfoAlertVisible });

  hideValidationAlert = () => this.setState({ isValidationAlertVisible: false });

  handleBack = () => this.props.navigation.pop();

  handleSubmitButtonPress = () => {
    const { mnemonic, handleSubmit } = this.props;

    const validation = validate({ mnemonic });

    this.setState(
      { validation, isValidationAlertVisible: hasError(validation) },
      () => {
        if (hasError(validation)) {
          return;
        }

        handleSubmit();
      }
    );
  };

  render() {
    const { t } = this.props;
    const {
      isInfoAlertVisible,
      isValidationAlertVisible,
      validation,
    } = this.state;

    return (
      <Fragment>
        <AlertShared
          buttons={[
            <Button
              key="confirm"
              onPress={this.toggleInfoAlert}
              padding={false}
              shape="square"
              title={t('shared.ok').toUpperCase()}
              variant="text"
            />,
          ]}
          isVisible={isInfoAlertVisible}
          text={t('auth.recovery.infoAlertText')}
          title={t('auth.recovery.infoAlertTitle')}
        />

        <AlertShared
          buttons={[
            <Button
              key="confirm"
              onPress={this.hideValidationAlert}
              padding={false}
              shape="square"
              title={t('shared.ok').toUpperCase()}
              variant="text"
            />,
          ]}
          isVisible={isValidationAlertVisible}
          title={t('auth.recovery.validationAlertTitle')}
        >
          {Object.keys(validation).map(key => (
            <Text key={key}>{validation[key]}</Text>
          ))}
        </AlertShared>

        <Container>
          <Header>
            <NavRow>
              <BackButton onPress={this.handleBack}>
                <BackIcon />
              </BackButton>
            </NavRow>
          </Header>

          <TitleContainer>
            <SimpleInfo
              description={t('auth.recovery.description')}
              title={t('auth.recovery.title')}
            />
          </TitleContainer>

          <KeyboardAvoidingView behavior="position">
            <Field
              autoFocus
              component={TextInput}
              label={t('auth.recovery.mnemonicFieldLabel')}
              name="mnemonic"
              placeholder={t('auth.recovery.mnemonicFieldPlaceholder')}
            />
            <InfoButton
              onPress={this.toggleInfoAlert}
              underlayColor="transparent"
            >
              <InfoIcon />
            </InfoButton>
          </KeyboardAvoidingView>

          <ButtonRow>
            <Button
              onPress={this.handleSubmitButtonPress}
              title={t('shared.continue')}
            />
          </ButtonRow>
        </Container>
      </Fragment>
    );
  }
}

export default Recovery;
