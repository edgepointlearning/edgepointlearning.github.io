source "https://rubygems.org"

gem "jekyll", "~> 3"

group :jekyll_plugins do
  gem "jekyll-assets", "~> 3"
  gem "jekyll-paginate-v2", "2.0.0"
  gem "jekyll-redirect-from"
  gem "jekyll-sitemap"
  gem 'jekyll-algolia'       # https://github.com/algolia/jekyll-algolia i had to force install nokogiri for this to work. Error was: "An error occurred while installing nokogiri (1.10.5), and Bundler cannot continue. Make sure that `gem install nokogiri -v '1.10.5' --source 'https://rubygems.org/'` succeeds before bundling."
  gem 'jekyll-inline-svg'     # https://github.com/sdumetz/jekyll-inline-svg
end

group :jekyll_assets do
  gem "uglifier"
  gem "sass" # look for faster alternative
  gem "autoprefixer-rails" # could use this as alternative: https://github.com/vwochnik/jekyll-autoprefixer
  gem "mini_magick"
end

gem "sprockets", "3.7.2", {
  require: false
}

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
