# frozen_string_literal: true

class Day < ApplicationRecord
  validates :number, presence: true, uniqueness: true
  validates :content_type, presence: true
  validates :content, presence: true

  def visible?
    today = Date.today

    today.day >= number && today.month == 12
  end

  def today?
    today = Date.today

    today.day == number && today.month == 12
  end

  def has_visible_next?
    next_day = Day.find_by(number: number + 1)

    next_day&.visible?
  end

  def has_visible_previous?
    previous_day = Day.find_by(number: number - 1)

    previous_day&.visible?
  end
end
