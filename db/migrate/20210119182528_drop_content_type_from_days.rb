class DropContentTypeFromDays < ActiveRecord::Migration[6.0]
  def change
    remove_column :days, :content_type
  end
end
