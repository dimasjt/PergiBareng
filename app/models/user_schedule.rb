# == Schema Information
#
# Table name: user_schedules
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  schedule_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_user_schedules_on_schedule_id  (schedule_id)
#  index_user_schedules_on_user_id      (user_id)
#

class UserSchedule < ApplicationRecord
  belongs_to :user
  belongs_to :schedule

  validates :user, :schedule, presence: true
  # validates :user, uniqueness: { scope: :schedule, message: "already join" }
  validate :max_users_schedule

  private

  def max_users_schedule
    if schedule && schedule.max_users <= schedule.user_schedules.count
      errors.add(:user, "the schedule is full")
    end
  end
end
