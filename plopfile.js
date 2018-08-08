const component = require('./templates/component');
const state = require('./templates/state');

module.exports = function configurePlop(plop) {
  component(plop);
  state(plop);
};
