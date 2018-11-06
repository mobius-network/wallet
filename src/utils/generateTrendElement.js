import React from 'react';
import {
  Trend,
  SecondaryAmount,
  IconChangeType,
} from 'components/shared/Financialtems/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function generateTrendElement(change) {
  const icon = change && change !== '0';
  const changeIconName = change > 0
    ? {
      color: '#69f0ae',
      name: 'caret-up',
    }
    : {
      color: '#ff5252',
      name: 'caret-down',
    };
  const changeAmount = change !== undefined ? `${change} %` : '-- %';
  return (
    <Trend>
      <SecondaryAmount>{changeAmount}</SecondaryAmount>
      {icon && (
        <IconChangeType>
          <Icon
            color={changeIconName.color}
            name={changeIconName.name}
            size={14}
          />
        </IconChangeType>
      )}
    </Trend>
  );
}
