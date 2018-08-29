import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

// import { notify } from 'utils/honeybadger';
import i18n from 'utils/i18n';
import store from 'state/store';
import Main from 'components/Main';

class Root extends Component {
  // componentDidCatch(error, info) {
  //   notify(error, info);
  // }

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Main />
        </I18nextProvider>
      </Provider>
    );
  }
}

export default Root;
