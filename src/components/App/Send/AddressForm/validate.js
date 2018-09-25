import { combineValidators, composeValidators } from 'revalidate';

import { isRequired, isValidPublicKey } from 'utils/validations';

export const validate = combineValidators({
  destination: composeValidators(isRequired, isValidPublicKey)(
    'Destination Address'
  ),
});
