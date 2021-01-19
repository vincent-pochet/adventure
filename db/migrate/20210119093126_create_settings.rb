class CreateSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :settings do |t|
      t.string :key, null: false, index: true
      t.text :value, null: false
      t.string :locale, index: true
    end
  end
end
