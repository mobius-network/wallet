import { combineValidators, composeValidators } from 'revalidate';

import { isRequired, isValidMnemonic } from 'utils/validations';

export const validate = combineValidators({
  mnemonic: composeValidators(isRequired, isValidMnemonic)('Mnemonic'),
});
