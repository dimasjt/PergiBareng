require "rails_helper"

describe Api::Users::RegistrationsController, type: :controller do
  describe "#create" do
    let(:user_attrs) { attributes_for(:user_credential) }

    it "should create user" do
      post :create, params: { user: user_attrs }, format: :json
      message = I18n.t("devise.registrations.signed_up_but_unconfirmed")
      expect(response.status).to eq 201
      expect(User.count).to eq 1
      expect(response.body).to include_json(
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

  describe "#update" do
    let(:user) { create(:user, email: "aa@gmail.com", name: "Bad Guy", city: "Bad City") }

    subject { auth_put user, :update, params: { user: @user_attrs }, format: :json }

    it "should update user" do
      @user_attrs = {
        # email: "updated@mail.com",
        name: "Cool Guy",
        city: "Awesome City",
        birthdate: "01/01/1990",
        current_password: user.password
      }
      expect(subject.status).to eq(200)
      expect(subject.body).to include_json(
        auth_token: user.reload.auth_token
      )
      # expect(user.email).to eq("updated@mail.com")
      expect(user.name).to eq("Cool Guy")
      expect(user.city).to eq("Awesome City")
      expect(user.birthdate).to eq("01/01/1990")
    end

    it "should return error" do
      @user_attrs = { email: "" }
      expect(subject.status).to eq(422)
    end

    it "should authorize" do
      put :update, params: { user: {} }, format: :json
      expect(response.status).to eq(401)
    end
  end
end
