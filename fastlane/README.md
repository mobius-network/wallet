fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios clean_full
```
fastlane ios clean_full
```

### ios setup
```
fastlane ios setup
```

### ios test
```
fastlane ios test
```
Runs all the tests
### ios bump_version
```
fastlane ios bump_version
```

### ios dev
```
fastlane ios dev
```
Prepare local development build
### ios prepare_distrib
```
fastlane ios prepare_distrib
```

### ios qa
```
fastlane ios qa
```
Push a new build to Crashlytics.
### ios beta
```
fastlane ios beta
```
Push a new beta build to TestFlight
### ios production
```
fastlane ios production
```
Push a new production build to App Store

----

## Android
### android clean
```
fastlane android clean
```
Clean Android project.
### android build
```
fastlane android build
```
Build the Android application.
### android test
```
fastlane android test
```
Runs all the tests
### android deploy
```
fastlane android deploy
```
Deploy a new version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
