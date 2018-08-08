module.exports = function configurePlop(plop) {
  plop.setGenerator('component', {
    description: 'Generate a new component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component\'s name:',
        validate: value => Boolean(value) || 'name is required',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Enter the component\'s path:',
      },
      {
        type: 'confirm',
        name: 'withContainer',
        message: 'Add Redux container?',
        default: false,
      },
    ],

    actions: ({ withContainer }) => {
      const actions = [];

      actions.push({
        type: 'add',
        path: 'src/components/{{ path }}/{{ properCase name }}/{{ properCase name }}.js',
        templateFile: 'templates/component/Component.js.hbs',
      });

      if (withContainer) {
        actions.push({
          type: 'add',
          path:
            'src/components/{{ path }}/{{ properCase name }}/{{ properCase name }}Container.js',
          templateFile: 'templates/component/ComponentContainer.js.hbs',
        });
      }

      ['styles', 'index'].forEach(template => actions.push({
        type: 'add',
        path: `src/components/{{ path }}/{{ properCase name }}/${template}.js`,
        templateFile: `templates/component/${template}.js.hbs`,
      }));

      return actions;
    },
  });
};
