import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';

import CustomHeader from 'components/shared/CustomHeader';
import CurrentBalance from 'components/shared/CurrentBalance';
import { AmountItem } from 'components/shared/Financialtems';
import BottomButtons from 'components/shared/BottomButtons';
import LoadingIcon from 'components/shared/LoadingIcon';

import { toFixed } from 'utils';

import { Container, FlatList, ItemContainer } from './styles';

class Payments extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    loadPayments: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    payments: PropTypes.array,
    reset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadPayments({ fresh: true });
  }

  componentWillUnmount() {
    this.props.reset();
  }

  updatePayments = () => {
    this.props.loadPayments();
  };

  handleBack = async () => {
    const { navigation } = this.props;

    await navigation.navigate('Dashboard');
  };

  renderItem = ({ item }) => {
    const { t } = this.props;
    const {
      id, asset, usdAmount, amount, cretaedAt, type,
    } = item;

    const title = t(`payments.${type}`);
    const description = moment(cretaedAt).format('MM/D/YY');
    const icon = `payment${capitalize(type)}`;
    const mainAmount = `${toFixed(amount)} ${asset.toUpperCase()}`;
    const secondaryAmount = `$${usdAmount.toFixed(2)}`;

    return (
      <ItemContainer key={id}>
        <AmountItem
          description={description}
          icon={icon}
          mainAmount={mainAmount}
          secondaryAmount={secondaryAmount}
          title={title}
          variant="simple"
        />
      </ItemContainer>
    );
  };

  render() {
    const {
      t, payments, navigation, isLoading,
    } = this.props;

    return (
      <Container>
        <CustomHeader
          onBackButtonPress={this.handleBack}
          title={t('payments.headerTitle')}
        >
          <CurrentBalance />
        </CustomHeader>

        {isLoading && payments.length === 0 && <LoadingIcon />}

        <FlatList
          data={payments}
          onEndReached={this.updatePayments}
          renderItem={this.renderItem}
        />

        <BottomButtons navigation={navigation} />
      </Container>
    );
  }
}

export default Payments;
