require 'rails_helper'

describe Api::Users::RegistrationsController, type: :controller do
  describe "#create" do
    let (:user_attrs) { attributes_for(:user_credential) }

    it "should create user" do
      post :create, params: { user: user_attrs }, format: :json
      message = I18n.t("devise.registrations.signed_up_but_unconfirmed")
      expect(response.status).to eq 201
      expect(User.count).to eq 1
      expect(response.body).to include_json(
        errors: [message],
        flash: message
      )
    end

    it "should return alert" do
      User.create(user_attrs)
      post :create, params: { user: user_attrs }, format: :json
      new_user = User.create(user_attrs)
      expect(response.status).to eq 422
      expect(User.count).to eq 1
      expect(response.body).to include_json(
        errors: new_user.errors.messages,
        flash: new_user.errors.full_messages.first
      )
    end
  end
end
