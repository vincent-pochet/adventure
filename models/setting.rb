# frozen_string_literal: true

class Setting < ApplicationRecord
  validates :key, presence: true
  validates :value, presence: true
end
