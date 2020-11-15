# frozen_string_literal: true

class Adventure < Sinatra::Base
  namespace '/api' do
    before do
      content_type 'application/json'
    end

    get '/days' do
      days = Day.order(number: :asc)

      today = Date.today.day
      json = days.map do |day|
        {
          number: day.number,
          visible: today >= day.number,
          today: today == day.number,
        }
      end

      { days: json }.to_json
    end

    get '/days/:number' do
      day = Day.find_by(number: params[:number])

      return 404 unless day
      return 403 if Date.today.day < day.number

      {
        day: {
          number: day.number,
          content_type: day.content_type,
          content: day.content,
        }
      }.to_json
    end

    post '/days/:number' do
      day = Day.find_by(number: params[:number])

      return 404 unless day
      # TODO: check permission

      body = JSON.parse(request.body.read, symbolize_names: true)
      day.update!(content: body.dig(:day, :content))

      {
        day: {
          number: day.number,
          content_type: day.content_type,
          content: day.content,
        }
      }.to_json
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
  end
end
