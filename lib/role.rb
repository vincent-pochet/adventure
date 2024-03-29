# frozen_string_literal: true

class Role
  AVAILABLE_ROLES = %w[visitor admin].freeze

  def self.valid_role?(role)
    AVAILABLE_ROLES.include?(role)
  end

  def self.get_role(password)
    if password == ENV['ADMIN_PASSWORD']
      return 'admin'
    elsif password == ENV['USER_PASSWORD']
      return 'visitor'
    end
  end
end