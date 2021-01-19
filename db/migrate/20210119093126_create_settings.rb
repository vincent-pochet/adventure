class CreateSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :settings do |t|
      t.string :key, null: false
      t.text :value, null: false
    end
  end
end
