require "rails_helper"

RSpec.describe UserSchedule, type: :model do
  let(:user) { create(:user) }

  context "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:schedule) }
    # it { should validate_uniqueness_of(:user).scoped_to(:schedule) }

    let(:place) { create(:place) }
    let(:user_schedules) { build_list(:user_schedule, 2) }
    let(:schedule) do
      create(:schedule,
        place: place, max_users: 2,
        user_schedules: user_schedules
      )
    end

    it "should limit user_schedule" do
      expect(schedule.user_schedules.count).to eq(2)
      us = schedule.user_schedules.create(user: user)
      expect(us.errors.full_messages).not_to be_empty
      expect(schedule.user_schedules.count).to eq(2)
    end
  end
end
