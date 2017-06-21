require 'rails_helper'

RSpec.describe Schedule, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:place_id) }
  it { should validate_presence_of(:meetup) }
  it { should validate_presence_of(:start_date) }
  it { should validate_presence_of(:end_date) }
  it { should define_enum_for(:status) }

  context "after save" do
    it "have days" do
      schedule = build(:schedule)
      schedule.start_date = Time.zone.now + 4.days
      schedule.end_date = Time.zone.now + 8.days
      schedule.save

      expect(schedule.days).to eq(4)
    end
  end
end
