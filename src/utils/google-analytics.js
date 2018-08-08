import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { isProduction } from 'utils/env';

if (isProduction) {
  ReactGA.initialize('UA-100779630-4');
  TagManager.initialize({ gtmId: 'GTM-KMFRMM4' });
}
