module LocaleHelper
  def locale_from_http_header(header)
    locale = header.scan(/^[a-z]{2}/).first.to_sym
    I18n.available_locales.include?(locale) ? locale : I18n.default_locale
  end
end
