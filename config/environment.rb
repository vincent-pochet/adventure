# frozen_string_literal: true

class Adventure < Sinatra::Base
  # initialize new sprockets environment
  set :environment, Sprockets::Environment.new

  # append assets paths
  environment.append_path 'assets/stylesheets'
  environment.append_path 'assets/javascripts'
  environment.append_path 'assets/images'
  environment.append_path 'assets/fonts'

  settings.production? do
    # compress assets
    environment.js_compressor = Uglifier.new(harmony: true)
  end

  # get assets
  get '/assets/*' do
    env['PATH_INFO'].sub!('/assets', '')
    settings.environment.call(env)
  end
end
