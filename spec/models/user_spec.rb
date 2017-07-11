require "rails_helper"

describe User, type: :model do
  it { should validate_presence_of(:name).on(:update) }
  it { should validate_presence_of(:birthdate).on(:update) }
  it { should validate_presence_of(:gender).on(:update) }
  it { should validate_presence_of(:city).on(:update) }

  context "validations" do
    let(:user) { create(:user) }

    it "valid birthdate" do
      user.birthdate = "10/10/1993"
      user.save
      expect(user.errors[:birthdate]).to be_empty
    end

    it "invalid birthdate" do
      user.birthdate = "Jun/29/1992"
      user.save
      expect(user.errors[:birthdate]).to_not be_empty
    end
  end

  describe "#authenticate" do
    let(:user) { create(:user) }

    it "should return user" do
      token = user.auth_token
      expect(User.authenticate(token)).to eq user
    end

    it "should not return user" do
      expect(User.authenticate("invalid.token")).to be_nil
    end
  end

  describe "#auth_token" do
    let(:user) { create(:user) }

    it "should return jwt token" do
      token = JWT.encode(user.to_api_data(:self), User.secret_token)
      expect(user.auth_token).to eq(token)
    end
  end
end
