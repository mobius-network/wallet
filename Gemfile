source "https://rubygems.org"

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem "cocoapods", "1.6.0.beta.1"
gem "cocoapods-fix-react-native", github: "nebolsin/cocoapods-fix-react-native"
gem "fastlane"
gem "dotgpg-environment"

plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
