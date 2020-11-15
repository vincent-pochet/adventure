# frozen_string_literal: true

class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.integer :number, null: false
      t.string :content_type, null: false
      t.text :introduction
      t.text :content, null: false

      t.index :number, unique: true
    end
  end
end
