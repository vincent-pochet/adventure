# frozen_string_literal: true

class Setting < ApplicationRecord
  validates :key, presence: true, uniqueness: { scope: :locale }
  validates :value, presence: true
  validates :locale, inclusion: { in: I18n.available_locales.map(&:to_s) }, allow_nil: true
end
