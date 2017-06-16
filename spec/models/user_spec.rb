require 'rails_helper'

describe User, type: :model do
  describe "#authenticate" do
    let (:user) { create(:user) }

    it "should return user" do
      token = user.auth_token
      expect(User.authenticate(token)).to eq user
    end

    it "should not return user" do
      expect(User.authenticate("invalid.token")).to be_nil
    end
  end

  describe "#auth_token" do
    let (:user) { create(:user) }

    it "should return jwt token" do
      token = JWT.encode(user.to_api_data(:self), User.secret_token)
      expect(user.auth_token).to eq(token)
    end
  end
end
