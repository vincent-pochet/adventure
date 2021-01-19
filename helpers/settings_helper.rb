module SettingsHelper
  def get_setting_value(key)
    (
      Setting.find_by(key: key, locale: I18n.locale) ||
      Setting.find_by(key: key, locale: nil) ||
      Setting.find_by(key: key, locale: I18n.default_locale)
    )&.value
  end
end
