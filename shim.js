/* eslint-disable */

const isDev = typeof __DEV__ === 'boolean' && __DEV__;

if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';
if (typeof location === 'undefined') {
  // Needed so that 'stream-http' chooses the right default protocol.
  global.location = {
    protocol: 'file:',
  };
}

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

if (typeof navigator !== "undefined") {
  // Some modules expect userAgent to be a string
  navigator.userAgent = 'React Native';
}

if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : ''
}

if (typeof self === 'undefined') global.self = global;

if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (var p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p]
    }
  }
}

process.browser = false;
process.env['NODE_ENV'] = isDev ? 'development' : 'production';
if (!process.version) {
  process.version = '';
}