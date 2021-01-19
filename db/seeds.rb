Day.delete_all

24.times do |i|
  Day.find_or_create_by!(number: i + 1) do |day|
    day.content = "<h1>#{i + 1} #{I18n.t('days.default_month_name')}</h1>"
  end
end

Setting.delete_all
Setting.create!(key: 'app.title', value: 'Adventure calendar', locale: 'en')
Setting.create!(key: 'app.introduction', value: '<p>Welcome to the adventure calendar!</p>', locale: 'en')
Setting.create!(key: 'error.forbidden', value: 'Good try! :)', locale: 'en')
Setting.create!(key: 'error.unauthorized', value: 'I think your are not supposed to be here...', locale: 'en')
Setting.create!(key: 'error.not_found', value: 'Hmmm... We found nothing there...', locale: 'en')
