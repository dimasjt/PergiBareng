require "rails_helper"

describe Api::Users::SessionsController, type: :controller do
  describe "#create" do
    let (:user) { create(:user) }

    subject { post :create, params: { user: @user_attributes }, format: :json }

    it "should return user" do
      @user_attributes = { email: user.email, password: user.password }

      expect(subject.status).to eq 201
      expect(subject.body).to include_json(
        email: user.email,
        auth_token: user.auth_token_api_attribute
      )
    end

    it "should not valid" do
      @user_attributes = { email: "not_valid", password: "not_valid" }
      expect(subject.status).to eq 401
    end
  end
end