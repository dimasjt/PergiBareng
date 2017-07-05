module ControllerHelpers
  extend ActiveSupport::Concern

  included do
    include Devise::Test::ControllerHelpers
  end

  def authorize(user)
    request.headers["Authorization"] = "Bearer #{user.auth_token}"
  end

  def json_parsed(obj)
    JSON.parse(obj).deep_symbolize_keys
  end

  %w[get post patch put delete].each do |m|
    define_method("auth_#{m}") do |user, action, **opts|
      authorize(user)
      send(m, action, opts)
    end
  end
end
