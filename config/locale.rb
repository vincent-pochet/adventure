# frozen_string_literal: true

require 'i18n'

I18n.load_path << Dir[File.expand_path('config/locales/*.yml')]
I18n.available_locales = %i[en fr]
I18n.default_locale = :en
