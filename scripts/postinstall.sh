#!/bin/sh
bundle check || bundle install

diff ios/Podfile.lock ios/Pods/Manifest.lock || (pushd ios; bundle exec pod install; popd)
