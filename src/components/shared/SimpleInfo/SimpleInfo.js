import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Description } from './styles';

class SimpleInfo extends Component {
  static propTypes = {
    description: PropTypes.any,
    title: PropTypes.string,
  };

  render() {
    const { title, description } = this.props;

    return (
      <Container>
        {title && <Title selectable={false}>{title}</Title>}

        {description && (
          <Description selectable={false}>{description}</Description>
        )}
      </Container>
    );
  }
}

export default SimpleInfo;
