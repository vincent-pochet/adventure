# frozen_string_literal: true

class Adventure < Sinatra::Base
  namespace '/api' do
    before do
      content_type 'application/json'
    end

    get '/me' do
      role = request.cookies['role']

      { role: role }.to_json
    end

    post '/session' do
      body = JSON.parse(request.body.read, symbolize_names: true)
      role = ::Role.get_role(body[:password])
      return 401 unless role

      response.set_cookie(
        'role',
        value: encryptor.encrypt(role),
        secure: true,
        httponly: true,
        path: '/',
        expires: Time.now + 30.days
      )

      { role: role }.to_json
    end

    get '/settings' do
      return 401 unless authenticated?

      settings = Setting.where(
        locale: I18n.default_locale # TODO: params['locale'] || I18n.default_locale,
      )

      settings = settings.where(key: params['keys']) if params['keys']

      json = settings.map do |setting|
        {
          key: setting.key,
          value: setting.value
        }
      end

      { settings: json }.to_json
    end

    get '/days' do
      return 401 unless authenticated?

      days = Day.order(number: :asc)

      json = days.map do |day|
        {
          number: day.number,
          visible: day.visible? || admin_role?,
          today: day.today?
        }
      end

      { days: json }.to_json
    end

    get '/days/:number' do
      return 401 unless authenticated?

      day = Day.find_by(number: params[:number])

      return 404 unless day
      return 403 unless day.visible? || admin_role?

      {
        day: {
          number: day.number,
          content: day.content,
          has_visible_next: day.visible_next? || admin_role? && day.next?,
          has_visible_previous: day.visible_previous? || admin_role? && day.previous?
        }
      }.to_json
    end

    post '/days/:number' do
      return 401 unless authenticated?
      return 403 unless admin_role?

      day = Day.find_by(number: params[:number])

      return 404 unless day

      body = JSON.parse(request.body.read, symbolize_names: true)
      day.update!(content: body.dig(:day, :content))

      {
        day: {
          number: day.number,
          content: day.content,
          has_visible_next: day.visible_next? || admin_role? && day.next?,
          has_visible_previous: day.visible_previous? || admin_role? && day.previous?
        }
      }.to_json
    end

    def cookie_role
      @cookie_role ||= encryptor.decrypt(request.cookies['role'])
    end

    def authenticated?
      ::Role.valid_role?(cookie_role)
    end

    def admin_role?
      cookie_role == 'admin'
    end

    error 403 do
      {
        code: 403,
        message: 'forbidden'
      }.to_json
    end

    error 404 do
      {
        code: 404,
        message: 'not_found'
      }.to_json
    end

    def encryptor
      Encryptor.new(ENV['SESSION_SECRET'])
    end
  end
end
