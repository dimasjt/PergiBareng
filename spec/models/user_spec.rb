require 'rails_helper'

describe User, type: :model do
  describe "#ensure_auth_token" do
    let (:user) { create(:user) }

    it "should have auth_token" do
      expect(user.auth_token).to_not be_nil
    end
  end

  describe "#authenticate" do
    let (:user) { create(:user) }

    it "should return user" do
      token = "#{user.id}.#{user.auth_token}"
      expect(User.authenticate(token)).to eq user
    end

    it "should not return user" do
      expect(User.authenticate("invalid.token")).to be_nil
    end
  end
end
