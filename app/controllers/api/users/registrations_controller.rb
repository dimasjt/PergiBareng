class Api::Users::RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
        render_json(resource.to_api_data(:auth), status: 201, flash: find_message(:sign_up))
      else
        flash_message = find_message(:"signed_up_but_#{resource.inactive_message}")
        expire_data_after_sign_in!
        render_json({}, status: 201, flash: flash_message)
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      render_json(json_errors(resource), status: 422)
    end
  end

  def destroy
    resource.destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    set_flash_message! :notice, :destroyed
    yield resource if block_given?
    respond_with_navigational(resource){ redirect_to after_sign_out_path_for(resource_name) }
  end
end
