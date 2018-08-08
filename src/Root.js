import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';

// import { notify } from 'utils/honeybadger';
import i18n from 'utils/i18n';

import store, { persistor } from 'state/store';

import Loading from 'components/Splash';
import Navigator from './Navigator';

class Root extends Component {
  componentDidMount() {
    // store.runSaga(rootSaga);
  }

  // componentDidCatch(error, info) {
  //   notify(error, info);
  // }

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <PersistGate loading={<Loading fullScreen />} persistor={persistor}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#297ebd' }}>
              <StatusBar barStyle="light-content" />
              <Navigator />
            </SafeAreaView>
          </PersistGate>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default Root;
