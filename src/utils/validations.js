import {
  createValidator,
  combineValidators as sourceCombine,
} from 'revalidate';
import { isObject } from 'lodash';

// Allows to access `props` in validator
export const combineValidators = config => {
  const validator = sourceCombine(config);

  return (values, props) => validator({ ...props, ...values });
};

const formatMessage = (message, defaultMessage) => isObject(message) && message.message
  ? message.message
  : defaultMessage(message);

export const isEquals = comparisonValue => createValidator(
  message => (value, allValues) => {
    if (value !== allValues[comparisonValue]) {
      return message;
    }

    return undefined;
  },
  field => formatMessage(field, f => `${f} must be equal to "${comparisonValue}"`)
);

export const isRationalNumber = createValidator(
  message => value => {
    if (!/^(\d*\.)?\d+$/i.test(value)) {
      return message;
    }

    return undefined;
  },
  field => `${field} must be a rational number`
);

export const isLessThanProp = ({ name, label }) => createValidator(
  message => (value, props) => {
    if (Number(value) > Number(props[name])) {
      return message;
    }

    return undefined;
  },
  field => `${field} must be a less than ${label}`
);
