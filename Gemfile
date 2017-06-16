source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "pg", "~> 0.18"
gem "puma", "~> 3.7"
gem "rails", "~> 5.1.1"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "webpacker"
# gem "therubyracer", platforms: :ruby

gem "coffee-rails", "~> 4.2"
gem "jbuilder", "~> 2.5"

gem "carrierwave"
gem "devise"
gem "jwt"
gem "foreman"
gem "friendly_id"
gem "kaminari"
gem "mini_magick"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"

  gem "factory_girl_rails"
  gem "faker"
  gem "figaro"
  gem "pry-rails"
end

group :development do
  gem "annotate"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "rubocop", require: false
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"

  gem "guard", require: false
  gem "guard-bundler", require: false
  gem "guard-livereload", require: false
  gem "guard-rspec", require: false
end

group :development, :tddium_ignore, :darwin do
  gem "terminal-notifier-guard", require: false # OSX-specific notifications for guard
end

group :test do
  gem "database_cleaner"
  gem "rspec-rails"
  gem "simplecov"
  gem "rspec-json_expectations"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
