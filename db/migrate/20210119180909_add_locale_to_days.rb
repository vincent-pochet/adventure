class AddLocaleToDays < ActiveRecord::Migration[6.0]
  def up
    add_column :days, :locale, :string, index: true, null: false, default: 'en'
    remove_index :days, :number
    add_index :days, %w[locale number], unique: true
  end

  def down
    remove_column :days, :locale
    add_index :days, :number, unique: true
  end
end
