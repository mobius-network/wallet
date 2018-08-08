import Honeybadger from 'honeybadger-js';
import { isDev, isTest } from './env';

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER_API_TOKEN,
  environment: process.env.NODE_ENV,
  revision: process.env.COMMITHASH,
  disabled: isDev || isTest,
});

export function notify(error) {
  return Honeybadger.notify(error);
}
