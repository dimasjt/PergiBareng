class Api::ApiController < ActionController::Base
  protect_from_forgery with: :null_session

  respond_to :json

  include ::ApiHelpers
end
