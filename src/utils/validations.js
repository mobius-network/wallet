import { createValidator } from 'revalidate';
import { StrKey } from 'stellar-sdk';
import { isNil } from 'lodash';

import i18n from 'utils/i18n';

export const isRequired = createValidator(
  message => (value) => {
    if (isNil(value)) {
      return message;
    }

    return undefined;
  },
  field => `${field} ${i18n.t('validations.isRequired')}`
);

export const isValidPublicKey = createValidator(
  message => (value) => {
    if (!StrKey.isValidEd25519PublicKey(value)) {
      return message;
    }

    return undefined;
  },
  field => `${field} ${i18n.t('validations.isValidPublicKey')}`
);
