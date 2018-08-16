import React, { Component } from 'react';
import navigator from 'state/navigator';

const wrapNavigator = name => Navigator => {
  class NavigatorContainer extends Component {
    static router = Navigator.router;

    setNavigator = ref => {
      navigator.setNavigator(name, ref);
    };

    render() {
      return <Navigator ref={this.setNavigator} {...this.props} />;
    }
  }

  return NavigatorContainer;
};

export default wrapNavigator;
