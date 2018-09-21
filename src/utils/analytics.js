import { Answers } from 'react-native-fabric';

export function trackEvent(event, data = {}) {
  try {
    Answers.logCustom(event, data);
  } catch (e) {
    console.log(e);
  }
}
