require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "#schedules" do
    let!(:user) { create(:user) }
    let!(:schedule) { create(:schedule, user: user) }

    it "return all created schedules user" do
      auth_get user, :schedules
      expect(response.status).to eq(200)
      expect(response.body).to include_json(
        schedules: [schedule.to_api_data(:index)]
      )
    end
  end

  describe "#user_schedules" do
    let!(:user) { create(:user) }
    let!(:user_schedule) { create(:user_schedule, user: user) }

    it "return all user schedules" do
      auth_get user, :user_schedules
      expect(response.status).to eq(200)
      expect(response.body).to include_json(
        user_schedules: [user_schedule.to_api_data(:index)]
      )
    end
  end
end
