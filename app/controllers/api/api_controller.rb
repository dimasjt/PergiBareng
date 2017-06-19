class Api::ApiController < ActionController::Base
  protect_from_forgery with: :null_session

  respond_to :json

  include ::ApiHelpers

  rescue_from ActiveRecord::RecordNotFound do
    render json: {
      errors: ["Record not found"],
      flash: "Record not found"
    }, status: 404
  end

  def authenticate_user_from_token!
    auth_token = request.headers["Authorization"].try(:sub, /Bearer /, "")

    if auth_token && user = User.authenticate(auth_token)
      sign_in user, store: false
    else
      render_json({}, status: 401, flash: "Unauthorized")
    end
  end
end
