import React, { Component } from 'react';
import { Dimensions, Vibration } from 'react-native';
import Animate from 'react-move/Animate';
import LinearGradient from 'react-native-linear-gradient';
import { easeLinear } from 'd3-ease';
import PropTypes from 'prop-types';
import { noop, range } from 'lodash';

import {
  NavRow,
  BackButton,
  BackIcon,
  Head,
  Container,
  StyledDot,
  dotStyles,
  Content,
  TextContainer,
  TitleContainer,
  Title,
  Subtitle,
  DotsContainer,
} from './styles';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class Header extends Component {
  static propTypes = {
    errorSubtitle: PropTypes.string,
    errorTitle: PropTypes.string,
    handleBack: PropTypes.func,
    onErrorShown: PropTypes.func,
    pin: PropTypes.string.isRequired,
    pinLength: PropTypes.number.isRequired,
    showBack: PropTypes.bool,
    showError: PropTypes.bool,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    errorSubtitle: null,
    onErrorShow: noop,
    showError: false,
    subtitle: null,
    showBack: false,
  };

  state = {
    moveData: { x: 0 },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.showError === this.props.showError) {
      return;
    }

    if (!this.props.showError) {
      return;
    }

    this.doShake();
  }

  async doShake() {
    const duration = 70;
    const finalDuration = 2000;
    const length = Dimensions.get('window').width / 3;

    Vibration.vibrate(500, false);

    await delay(duration);
    this.setState({ moveData: { x: length } });

    await delay(duration);
    this.setState({ moveData: { x: -length } });

    await delay(duration);
    this.setState({ moveData: { x: length / 2 } });

    await delay(duration);
    this.setState({ moveData: { x: -length / 2 } });

    await delay(duration);
    this.setState({ moveData: { x: length / 4 } });

    await delay(duration);
    this.setState({ moveData: { x: -length / 4 } });

    await delay(duration);
    this.setState({ moveData: { x: 0 } });

    await delay(finalDuration);
    this.props.onErrorShown();
  }

  renderTitle = (opacity) => {
    const { title, errorTitle, showError } = this.props;

    return (
      <TitleContainer>
        <Title selectable={false} showError={showError} style={opacity}>
          {showError ? errorTitle : title}
        </Title>
      </TitleContainer>
    );
  };

  renderSubtitle = (opacity) => {
    const { subtitle, errorSubtitle, showError } = this.props;

    return (
      <Subtitle selectable={false} showError={showError} style={opacity}>
        {showError ? errorSubtitle : subtitle}
      </Subtitle>
    );
  };

  renderDot = (index, x) => {
    const { pin, showError } = this.props;

    if (showError) {
      return <StyledDot key={index} showError style={{ left: x }} />;
    }

    if (pin.length >= index + 1) {
      return (
        <LinearGradient
          key={index}
          colors={['#4637E6', '#8C2DFD']}
          end={{ x: 1, y: 1 }}
          start={{ x: 0, y: 1 }}
          style={[dotStyles, { left: x }]}
        />
      );
    }

    return <StyledDot key={index} showError={false} style={{ left: x }} />;
  };

  render() {
    const { pinLength, showBack, handleBack } = this.props;
    const { moveData } = this.state;

    return (
      <Container>
        {showBack && (
          <Head>
            <NavRow>
              <BackButton onPress={handleBack}>
                <BackIcon />
              </BackButton>
            </NavRow>
          </Head>
        )}
        <Content>
          <Animate
            enter={{
              opacity: [1],
              timing: { duration: 200, ease: easeLinear },
            }}
            show={true}
            start={{
              opacity: 0,
            }}
          >
            {({ opacity }) => (
              <TextContainer>
                {this.renderTitle(opacity)}
                {this.renderSubtitle(opacity)}
              </TextContainer>
            )}
          </Animate>
          <Animate
            show={true}
            start={{
              x: 0,
            }}
            update={{
              x: [moveData.x],
              timing: { duration: 200, ease: easeLinear },
            }}
          >
            {({ x }) => (
              <DotsContainer>
                {range(pinLength).map(index => this.renderDot(index, x))}
              </DotsContainer>
            )}
          </Animate>
        </Content>
      </Container>
    );
  }
}

export default Header;
