# frozen_string_literal: true

class Day < ApplicationRecord
  validates :number, presence: true, uniqueness: { scope: :locale }
  validates :content, presence: true
  validates :locale, inclusion: { in: I18n.available_locales.map(&:to_s) }, allow_nil: true

  def visible?
    today = Date.today

    today.day >= number && today.month == 12
  end

  def today?
    today = Date.today

    today.day == number && today.month == 12
  end

  def next?
    Day.exists?(number: number + 1)
  end

  def visible_next?
    next_day = Day.find_by(number: number + 1)

    next_day&.visible?
  end

  def previous?
    Day.exists?(number: number - 1)
  end

  def visible_previous?
    previous_day = Day.find_by(number: number - 1)

    previous_day&.visible?
  end
end
