# frozen_string_literal: true

# require gems and libs
require 'sinatra'
require 'sinatra/activerecord'
require 'bcrypt'
require 'rack/protection'
require 'rack/contrib'

require "sinatra/reloader" if development?
require 'sinatra/namespace'
require 'sinatra/cookies'

require 'sprockets'
require 'therubyracer'
require 'uglifier'
require 'execjs'
require 'slim'

class Adventure < Sinatra::Base
  register Sinatra::ActiveRecordExtension
  register Sinatra::Namespace
  use Rack::Cookies
  helpers Sinatra::Cookies

  configure :development do
    register Sinatra::Reloader
    enable :reloader
    also_reload 'models/*.rb'
    also_reload 'routes/*.rb'
  end

  set :sessions, true

  # session support for your app
  use Rack::Session::Pool

  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__) + '/public'

  set :session_secret, ENV['SESSION_SECRET']

  use Rack::Session::Cookie,
    key: 'rack.session',
    domain: ENV['APP_DOMAIN'],
    path:  '/',
    expire_after:  2592000,
    secret: ENV['SESSION_SECRET'],
    old_secret: ENV['OLD_SESSION_SECRET']

  # require config
  require_relative "config/environment"

  # require models
  require_relative 'models/application_record'
  Dir['./models/*.rb'].each { |file| require_relative file }
  Dir['./lib/*.rb'].each { |file| require_relative file }

  # require routes
  Dir['./routes/*.rb'].each { |file| require_relative file }

  use Rack::Protection
end
