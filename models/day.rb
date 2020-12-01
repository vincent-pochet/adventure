# frozen_string_literal: true

class Day < ApplicationRecord
  validates :number, presence: true, uniqueness: true
  validates :content_type, presence: true
  validates :content, presence: true

  def visible?
    today = Date.today.day

    today >= number
  end

  def today?
    today = Date.today.day

    today == number
  end

  def next?
    next_day = Day.find_by(number: number + 1)

    next_day&.visible?
  end

  def previous?
    previous_day = Day.find_by(number: number - 1)

    previous_day&.visible?
  end
end
