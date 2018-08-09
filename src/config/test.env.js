const devEnv = require('./dev.env');

module.exports = Object.assign(devEnv, {
  NODE_ENV: '"testing"',
});
