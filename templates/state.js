module.exports = function configurePlop(plop) {
  plop.setGenerator('state', {
    description: 'Generate a state feature',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the state feature name:',
        validate: value => Boolean(value) || 'name is required',
      },
    ],

    actions: () => {
      const actions = [];

      ['selectors', 'reducer', 'index'].forEach(template => actions.push({
        type: 'add',
        path: `src/state/{{ camelCase name }}/${template}.js`,
        templateFile: `templates/state/${template}.js.hbs`,
      }));

      return actions;
    },
  });
};
