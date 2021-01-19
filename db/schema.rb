# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_210_119_182_528) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'days', force: :cascade do |t|
    t.integer 'number', null: false
    t.text 'introduction'
    t.text 'content', null: false
    t.string 'locale', default: 'en', null: false
    t.index %w[locale number], name: 'index_days_on_locale_and_number', unique: true
  end

  create_table 'settings', force: :cascade do |t|
    t.string 'key', null: false
    t.text 'value', null: false
    t.string 'locale'
    t.index ['key'], name: 'index_settings_on_key'
    t.index ['locale'], name: 'index_settings_on_locale'
  end

  create_table 'settings', force: :cascade do |t|
    t.string 'key', null: false
    t.text 'value', null: false
  end
end
