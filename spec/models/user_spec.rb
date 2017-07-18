require "rails_helper"

describe User, type: :model do
  it { should validate_presence_of(:name).on(:update) }
  it { should validate_presence_of(:birthdate).on(:update) }
  it { should validate_presence_of(:gender).on(:update) }
  it { should validate_presence_of(:city).on(:update) }

  let(:user) { create(:user) }

  context "validations" do
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
    it "should return user" do
      token = user.auth_token
      expect(User.authenticate(token)).to eq user
    end

    it "should not return user" do
      expect(User.authenticate("invalid.token")).to be_nil
    end
  end

  describe "#auth_token" do
    it "should return jwt token" do
      token = JWT.encode(user.token_attribute, User.secret_token)
      expect(user.auth_token).to eq(token)
    end
  end

  describe "#token_attribute" do
    it "should return attributes for token" do
      expect(user.token_attribute.symbolize_keys).to eq(
        id: user.id,
        email: user.email
      )
    end
  end
end
