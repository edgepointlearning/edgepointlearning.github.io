source "https://rubygems.org"

gem "jekyll", "~> 3"

group :jekyll_plugins do
  gem "jekyll-assets", "~> 3"
  gem "jekyll-paginate-v2"
  gem "jekyll-redirect-from"
  gem "jekyll-sitemap"
end

group :jekyll_assets do
  gem "uglifier"
  gem "sass"
  gem "autoprefixer-rails"
  gem "mini_magick"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
