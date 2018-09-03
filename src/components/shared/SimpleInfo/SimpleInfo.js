import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Description } from './styles';

class SimpleInfo extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const { title, description } = this.props;

    return (
      <Container>
        <Title selectable={false}>{title}</Title>
        <Description selectable={false}>{description}</Description>
      </Container>
    );
  }
}

export default SimpleInfo;
