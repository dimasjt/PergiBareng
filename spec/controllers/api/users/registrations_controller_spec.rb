require 'rails_helper'

describe Api::Users::RegistrationsController, type: :controller do
  describe "#create" do
    let (:user_attrs) { attributes_for(:user_credential) }

    it "should create user" do
      post :create, params: { user: user_attrs }, format: :json
      expect(response.status)
      expect(User.count).to eq(1)
      expect(response.body).to include_json(
        email: user_attrs[:email]
      )
    end
  end
end
