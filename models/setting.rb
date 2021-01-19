# frozen_string_literal: true

class Setting < ApplicationRecord
  validates :key, presence: true, uniqueness: { scope: 'locale' }
  validates :value, presence: true
end
