import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ImageBackgroundView, ContentView, Description, Title,
} from './styles';

import background from './images/bg.png';

class NoticeView extends Component {
  static propTypes = {
    children: PropTypes.any,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, description, title } = this.props;

    return (
      <ImageBackgroundView source={background}>
        <ContentView>
          <Title selectable={false}>{title}</Title>
          <Description selectable={false}>{description}</Description>
          {children}
        </ContentView>
      </ImageBackgroundView>
    );
  }
}

export default NoticeView;
