import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Amount,
  AmountContainer,
  Asset,
  AssetButton,
  AssetButtonContent,
  AssetIcon,
  BackButton,
  BackIcon,
  Container,
  Content,
  Gradient,
  NavRow,
  Title,
  UsdAmount,
} from './styles';

class Header extends PureComponent {
  static propTypes = {
    amount: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    onBackButtonClick: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    usdPrice: PropTypes.number.isRequired,
  };

  render() {
    const {
      amount,
      asset,
      onBackButtonClick,
      onPress,
      t,
      usdPrice,
    } = this.props;

    const usdAmount = (amount * usdPrice).toFixed(2);

    return (
      <Gradient>
        <NavRow>
          <BackButton onPress={onBackButtonClick}>
            <BackIcon />
          </BackButton>
          <Title>{t('send.amountForm.headerTitle')}</Title>
        </NavRow>
        <Container>
          <Content>
            <AmountContainer>
              <Amount>{amount || 0}</Amount>
              <AssetButton onPress={onPress}>
                <AssetButtonContent>
                  <Asset>{asset.toUpperCase()}</Asset>
                  <AssetIcon />
                </AssetButtonContent>
              </AssetButton>
            </AmountContainer>

            <UsdAmount>≈ ${usdAmount} USD</UsdAmount>
          </Content>
        </Container>
      </Gradient>
    );
  }
}

export default Header;
