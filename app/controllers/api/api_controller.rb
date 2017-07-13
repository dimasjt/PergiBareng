class Api::ApiController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  respond_to :json

  def authenticate_user!(**args)
    auth_token = request.headers["Authorization"].try(:sub, /Bearer /, "")

    if auth_token && user = User.authenticate(auth_token)
      sign_in user, store: false
    end
  end
end
