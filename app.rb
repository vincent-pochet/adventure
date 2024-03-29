# frozen_string_literal: true

# require gems and libs
require 'sinatra'
require 'sinatra/activerecord'
require 'bcrypt'
require 'rack/protection'
require 'rack/contrib'

require 'sinatra/reloader' if development?
require 'sinatra/namespace'

require 'sprockets'
require 'therubyracer'
require 'uglifier'
require 'execjs'
require 'slim'

class Adventure < Sinatra::Base
  register Sinatra::ActiveRecordExtension
  register Sinatra::Namespace
  use Rack::Cookies

  configure :development do
    register Sinatra::Reloader
    enable :reloader
    also_reload 'models/*.rb'
    also_reload 'routes/*.rb'
    also_reload 'helpers/*.rb'
  end

  enable :logging

  configure :production do
    require 'rack/ssl'
    use Rack::SSL
  end

  set :root, File.dirname(__FILE__)
  set :public_folder, File.join(File.dirname(__FILE__), 'public')

  # require config
  require_relative 'config/locale'
  require_relative 'config/environment'

  # require models
  require_relative 'models/application_record'
  Dir['./models/*.rb'].each { |file| require_relative file }
  Dir['./lib/*.rb'].each { |file| require_relative file }
  Dir['./helpers/*.rb'].each { |file| require_relative file }

  # require routes
  Dir['./routes/*.rb'].each { |file| require_relative file }

  helpers SettingsHelper, LocaleHelper
end
