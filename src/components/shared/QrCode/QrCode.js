import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';
import querystring from 'querystring';
import { assets } from '@mobius-network/core';

class QrCode extends Component {
  static generatePayURI = ({
    destination, amount, memo, asset: assetCode,
  }) => {
    const asset = assets[assetCode.toLowerCase()];

    const payload = {
      destination,
      amount,
      memo,
      memo_type: 'MEMO_TEXT',
      asset_code: asset.code,
      asset_issuer: asset.issuer,
    };

    if (assets[asset] !== undefined) {
      Object.assign(payload, assets[asset]);
    }

    return `web+stellar:pay?${querystring.stringify(payload)}`;
  };

  static propTypes = {
    size: PropTypes.number.isRequired,
  };

  render() {
    const { size } = this.props;

    return <QRCode size={size} value={QrCode.generatePayURI(this.props)} />;
  }
}

export default QrCode;
