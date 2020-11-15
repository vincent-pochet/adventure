# frozen_string_literal: true

class Day < ApplicationRecord
  validates :number, presence: true, uniqueness: true
  validates :content_type, presence: true
  validates :content, presence: true
end
