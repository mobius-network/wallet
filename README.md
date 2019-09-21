# Mobius Network mobile wallet

## Development

```sh
yarn start
yarn run ios
yarn run android
```

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Quiz

**Question 1:** Are there any problems with the below code?

```
import { SIGNUP } from 'consts';
import { Content, Host, Section, SignUpButton, Version } from './style';

// React wasn't imported into this file. The code below won't work.
export default class Signup extends React.Component {
  onSignupPress() {
    // Navigation wasn't imported. An error will happen.
    Navigation.push(this.props.componentId, {
      component: {
        name: SIGNUP
      }
    });
  };

  getFormattedVersion(version) {
    // If the purpose of this function is to return a HTML snippet with the "version" value
    // into it, we need to change the double quotes to back-tick(` `)
    return "<b>${version}</b>”;
  }

  render() {
    const { versionLabel } = this.props;
    return (
      <Host>
        <Content>
          <Section>
            // onSignupPress function wasn't declared using arrow function and also wasn't 
            // bound inside the constructor method available to ES6 classes, which ensures that // the keyword "this" will be bound correctly to the created component.
            <SignUpButton onPress={this.onSignupPress} title="Signup" />
          </Section>
        </Content>
        <Version>{() => this.getFormattedVersion(versionLabel)}</Version>
      </Host>
    );
  }
}
```

**Question 2:** Is there a difference in the below two statements and if so what? Assume we are using React Native with Redux and Redux-Saga.

```
A. store.dispatch(lifecycleActions.loadProfile());
B. yield effects.put(lifecycleActions.loadProfile());
```

Basically, both statements do the same thing, which is to dispacth an action to the redux store.
In the first statement, an action is dispatched using the _dispacth_ method from redux's store.
In the second statement, a yielded object instructs the redux-saga middleware to dispacth the action. 

**Question 3:** Explain the differences in the 3 non-constructor functions below.

```
class Dashboard {
  constructor(_num) {
    this.num = _num;
  }

  // The staticFunction can't be used in instances of the Dashboard class.
  // Within the static function, the "this" keyword refers to the Dashboard class.
  static staticFunc() {
    console.log("staticFunc " + this.num);
  }

  // The syntax of memberFunc1 function allows it to become available
  // in the class prototype method. The "this" keyword will be determined at run time.
  memberFunc1() {
    console.log("memberFunc1 " + this.num);
  }

  // memberFunc2 doesn't become available in the prototype method.
  // The "this" keyword is bound to its enclosing scope; in this case,
  // the Dashboard class.
  memberFunc2 = () => console.log("memberFunc2 " + this.num);
}
```

**Question 4:** Are there any bugs in the below code?