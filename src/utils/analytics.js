import { Answers } from 'react-native-fabric';

export function trackEvent(event, data = {}) {
  try {
    Answers.logCustom(event, data);
  } catch (e) {
    console.log(e);
  }
}

export function logLogin(method, success) {
  try {
    Answers.logLogin(method, success);
  } catch (e) {
    console.log(e);
  }
}

export function logSignUp(method, success) {
  try {
    Answers.logSignUp(method, success);
  } catch (e) {
    console.log(e);
  }
}
