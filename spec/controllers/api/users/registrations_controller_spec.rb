require 'rails_helper'

describe Api::Users::RegistrationsController, type: :controller do
  describe "#create" do
    let (:user_attrs) { attributes_for(:user_credential) }

    it "should create user" do
      post :create, params: { user: user_attrs }, format: :json
      user = User.first
      expect(response.status).to eq 201
      expect(User.count).to eq 1
      expect(response.body).to include_json(
        email: user_attrs[:email],
        auth_token: user.auth_token_api_attribute
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
        flash: new_user.errors.full_messages
      )
    end
  end
end
