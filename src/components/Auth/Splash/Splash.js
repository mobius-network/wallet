import React, { Component } from 'react';

import { SplashImage } from './styles';
import imgSource from './images/splash.png';

class Splash extends Component {
  render() {
    return <SplashImage source={imgSource} />;
  }
}

export default Splash;
