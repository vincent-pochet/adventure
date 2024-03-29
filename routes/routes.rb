# frozen_string_literal: true

class Adventure < Sinatra::Base
  set :show_exceptions, :after_handler

  before do
    content_type 'text/html; charset=utf-8'
    I18n.locale = locale_from_http_header(request.env['HTTP_ACCEPT_LANGUAGE'])
  end

  get '/' do
    slim :application
  end

  get '/404' do
    status 404
  end

  get '/403' do
    status 403
  end

  get '/500' do
    status 500
  end

  error 401 do
    slim :'errors/unauthorized'
  end

  error 403 do
    slim :'errors/forbidden'
  end

  error 404 do
    slim :'errors/not_found'
  end

  error 500 do
    slim :'errors/fatal'
  end
end
