class Api::Users::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!, only: :create

  def create
    self.resource = User.find_for_database_authentication(email: sign_in_params[:email])

    if resource.try(:active_for_authentication?)
      if resource.valid_password?(sign_in_params[:password])
        sign_in(resource_name, resource)
        render_json resource.to_api_data(:auth), status: 200, flash: find_message(:signed_in)
      else
        render_json({}, status: 422, flash: I18n.t("devise.failure.invalid"))
      end
    else
      render_json({}, status: 401, flash: I18n.t("devise.failure.inactive"))
    end
  end

  # DELETE /resource/sign_out
  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message! :notice, :signed_out if signed_out
    yield if block_given?
    respond_to_on_destroy
  end
end
