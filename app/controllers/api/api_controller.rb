class Api::ApiController < ActionController::Base
  protect_from_forgery with: :null_session

  respond_to :json

  include ::ApiHelpers

  def authenticate_user_from_token!
    if user = User.authenticate(params[:auth_token])
      sign_in user, store: false
    else
      false
    end
  end
end
