class Api::ApiController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  respond_to :json

  include ::ApiHelpers

  rescue_from ActiveRecord::RecordNotFound do
    render json: {
      errors: ["Record not found"],
      flash: "Record not found"
    }, status: 404
  end

  def authenticate_user!(**args)
    auth_token = request.headers["Authorization"].try(:sub, /Bearer /, "")

    if auth_token && user = User.authenticate(auth_token)
      sign_in user, store: false
    else
      render_json({}, status: 401, flash: "Unauthorized")
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:account_update) do |p|
      p.permit(:email, :name, :city, :birthdate, :current_password)
    end
  end
end
