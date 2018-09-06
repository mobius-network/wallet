require 'json'

package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.module_name    = "RNOS"
  s.name           = package["name"]
  s.version        = package["version"]
  s.summary        = package["description"]
  s.homepage       = package["homepage"]
  s.license        = { type: package["license"], file: 'LICENSE' }
  s.author         = { package["author"]["name"] => package["author"]["email"] }
  s.platform       = :ios
  s.source         = { git: "#{package["repository"]["url"]}.git", tag: "v#{s.version}" }
  s.source_files   = 'ios/**/*.{h,m}'
  s.preserve_paths = "**/*.js"

  s.ios.deployment_target = '9.0'

  s.dependency 'React'
end
