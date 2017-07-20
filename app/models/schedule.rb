# == Schema Information
#
# Table name: schedules
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  place_id   :integer
#  meetup     :text
#  start_date :datetime
#  end_date   :datetime
#  max_users  :integer          default(0)
#  days       :integer          default(0)
#  price      :integer          default(0)
#  status     :integer          default("pending")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_schedules_on_place_id  (place_id)
#  index_schedules_on_user_id   (user_id)
#

class Schedule < ApplicationRecord
  STATUS = %w[pending available full ongoing completed].freeze

  has_many :user_schedules, dependent: :nullify
  has_many :joined_users, class_name: "User", through: :user_schedules
  belongs_to :user
  belongs_to :place

  before_save :set_days

  enum status: STATUS

  validates :user_id, :place_id, :meetup, :start_date, :end_date, presence: true

  private

  def set_days
    self.days = (end_date.to_date - start_date.to_date).floor
  end
end
