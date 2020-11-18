require 'bundler/setup'
require File.dirname(__FILE__) + '/app'

APP_ENV = ENV["RACK_ENV"] || "development"

Bundler.require :default, APP_ENV.to_sym

run Adventure
